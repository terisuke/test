import { BuggyCounter } from '../components/BuggyCounter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-3xl font-bold text-center">Buggy Counter Demo</h1>
        <BuggyCounter />
      </div>
    </main>
  )
}