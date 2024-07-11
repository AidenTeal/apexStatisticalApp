'use client'

import Image from "next/image"
import { ThemeToggle } from "../ui/toggle-mode"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useRouter } from "next/navigation"
import { useState } from "react"


export const Nav = () => {
    const router = useRouter();

    const handleSendHome = () => {
        router.push("/");
    }

    const handleLinkAccount = () => {
        router.push("/apexstats/linkAccount");
    }

    const [isRotated, setIsRotated] = useState(false);

    const handleToggleRotation = () => {
        setIsRotated(!isRotated);
    };


    return (
        <header >
            <nav className="absolute h-24 w-full" style={{
                backgroundColor: 'hsl(var(--card))',
            }}>
                <div className="flex items-center justify-between h-full absolute left-0 ml-8 w-full">
                    <ThemeToggle />
                    <div className="flex items-center justify-start mr-12">
                        <Button className="bg-[hsl(var(--background))] mr-4 w-24"  onClick={handleSendHome}>Home</Button>
                        <Button className="bg-[hsl(var(--background))] w-24" onClick={handleLinkAccount}>Link</Button>
                        <Button onClick={handleToggleRotation}>
                            <Avatar>
                                <AvatarImage src="https://cdn-icons-png.flaticon.com/128/15339/15339256.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h2 className="ml-2"> Username </h2>
                            <h2 className={`transition-transform duration-300 ${isRotated ? 'rotate-180' : ''}`}> ▼ </h2>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
