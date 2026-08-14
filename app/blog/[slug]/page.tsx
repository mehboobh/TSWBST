// app/blog/[slug]/page.tsx

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/blog-data'
import { ArrowLeft, Clock, Calendar, Mail, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${post.title} | TruckEase Insights`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const paragraphs = (post.content || '')
    .trim()
    .split('\n\n')
    .filter(Boolean)

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 py-12 lg:py-20">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          Back to Insights & Blog
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-4">
            <span className="rounded-md bg-cyan-100 px-2.5 py-1 text-cyan-800">
              {post.category}
            </span>

            <span className="flex items-center gap-1">
              <Calendar className="size-3.5" />
              {post.date}
            </span>

            <span className="flex items-center gap-1">
              <Clock className="size-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-3 pt-6 border-t border-slate-200">
            <div className="h-9 w-9 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold">
              TE
            </div>

            <div>
              <p className="text-xs font-bold text-slate-900">
                {post.author}
              </p>
              <p className="text-[11px] text-slate-500">
                TruckEase Solutions Inc.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[300px] sm:h-[420px] w-full rounded-2xl overflow-hidden mb-10 border border-slate-200 shadow-sm bg-slate-100 relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm text-slate-800 leading-relaxed space-y-6">
          {paragraphs.map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2
                  key={idx}
                  className="text-2xl font-bold text-slate-900 pt-4 border-b border-slate-100 pb-2"
                >
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }

            if (paragraph.startsWith('### ')) {
              return (
                <h3
                  key={idx}
                  className="text-xl font-bold text-slate-900 pt-2"
                >
                  {paragraph.replace('### ', '')}
                </h3>
              )
            }

            if (paragraph.startsWith('---')) {
              return <hr key={idx} className="border-slate-100 my-6" />
            }

            if (paragraph.startsWith('* ') || paragraph.startsWith('1. ')) {
              const items = paragraph.split('\n')

              return (
                <ul
                  key={idx}
                  className="list-disc pl-5 space-y-2 text-slate-700 my-4"
                >
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      {item.replace(/^(\* |\d+\. )/, '')}
                    </li>
                  ))}
                </ul>
              )
            }

            return (
              <p key={idx} className="text-sm sm:text-base text-slate-700">
                {paragraph}
              </p>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-slate-900 text-white p-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-950 border border-cyan-500/30 px-3 py-1 text-xs text-cyan-300">
            <ShieldCheck className="size-3.5 text-cyan-400" />
            Operational Confidence
          </div>

          <h3 className="text-2xl font-bold">
            Request a Fleet Risk Screening
          </h3>

          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Get an independent, structured evaluation of your public compliance
            standing delivered straight to your inbox.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-500 text-white"
            >
              <Link href="/risk-screening">Request Risk Screening</Link>
            </Button>

            <a
              href="mailto:contact@truckease.co"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white"
            >
              <Mail className="size-3.5" />
              contact@truckease.co
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
