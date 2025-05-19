"use client"
import { CheckIcon, FileIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      direction="column"
      justify="center"
      className="h-dvh max-md:w-[90%] w-[70%] mx-auto"
    >
      <Heading
        size="8"
      >
        Next.js Fullstack Todo App
      </Heading>
      <Text
        mb="6"
        mt="4"
        className="max-md:w-[90%] w-[70%]"
      >
        This is a full-stack todo app built with Next.js. Being full-stack app means that the API is also created with the help of the Next.js. It also uses Radix UI and tailwindcss for styling.
      </Text>
      <Flex gap="2">
        <Link href="/todos">
          <Button size="3">
            <CheckIcon />
            Get Started
          </Button>
        </Link>
        <Link href="https://github.com/nureddinfarzaliyev/nextjs-fullstack-todo">
          <Button size="3" variant="surface">
            <GitHubLogoIcon />
            Source Code
          </Button>
        </Link>
        <Link href="https://nextjs.org/docs/getting-started">
          <Button
            size="3"
            variant="outline"
          >
            <FileIcon />
            Next.js Docs
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
