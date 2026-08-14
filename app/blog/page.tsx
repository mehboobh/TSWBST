// app/blog/page.tsx

import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog-data'
import { ArrowRight, Clock, ShieldCheck, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Compliance Insights & Fleet Resources | TruckEase Solutions',
  description:
    'Expert insights on FMCSA audits, IFTA tax reporting, cross-border regulations, and commercial fleet safety.',
}

export default function BlogPage() {
  const posts = BLOG_POSTS || []
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1)

  if (!featuredPost) {
    return (
      <div className="min-h-screen p-12 text-center text-slate-600">
        <h2>No blog posts available.</h2>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-600 mb-4 shadow-sm">
            <ShieldCheck className="size-3.5 text-cyan-600" />
            TruckEase Regulatory Desk
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Compliance Insights & Fleet Guidance
          </h1>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Practical regulatory analysis, FMCSA audit strategies, and fleet
            compliance updates for commercial motor carriers.
          </p>
        </div>

        <div className="mb-16 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md">
          <div className="grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 min-h-[300px] lg:min-h-[420px] bg-slate-100 relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-3">
                  <span className="rounded-md bg-cyan-50 px-2.5 py-1 text-cyan-700 border border-cyan-100">
                    {featuredPost.category}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 leading-snug hover:text-cyan-600 transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  {featuredPost.date}
                </span>

                <Button
                  asChild
                  size="sm"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Article <ArrowRight className="size-3.5 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div>
                <div className="h-48 w-full bg-slate-100 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-slate-700">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug hover:text-cyan-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>{post.date}</span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-cyan-600 hover:underline inline-flex items-center gap-1"
                >
                  Read <ArrowRight className="size-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Need Specific Regulatory Guidance for Your Fleet?
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              Our digital support desk is available for direct compliance
              reviews and risk screening evaluations.
            </p>
          </div>

          <a
            href="mailto:contact@truckease.co"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shrink-0"
          >
            <Mail className="size-4 text-cyan-400" />
            contact@truckease.co
          </a>
        </div>
      </div>
    </div>
  )
}
