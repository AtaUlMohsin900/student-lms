import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
<p className='text-3xl font-medium text-sky-700'>
 Hello world!
 </p>
 <Button variant="destructive">
   Click Me
 </Button>
 </div>
    </main>
    
  )
}
