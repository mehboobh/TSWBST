import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-foreground">404</h1>
      <p className="mt-3 text-base text-muted-foreground">The page you are looking for could not be found.</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Back to Home
      </Link>
    </div>
  )
}
