import { UserButton } from "@clerk/nextjs"

function Home() {
  return (
    <div>
      <UserButton
      afterSignOutUrl="/"
      />
    </div>
  )
}

export default Home
