"use client"
import { Heading, Container, Link } from "@radix-ui/themes"

const Navbar = () => {
  return (
    <header className="fixed top-0 h-16 flex items-center border-b border-b-gray-50/10 w-full z-10">
      <Container>
        <div className="flex items-center justify-between">
          <Heading>Todo</Heading>
          <div className="flex gap-4">
            <Link href="/">
              Home
            </Link>
            <Link href="/todos">
              Todos
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
