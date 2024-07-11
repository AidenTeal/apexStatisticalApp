'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { XboxLogo } from "../styles/icons/Xbox";
  import { PSNLogo } from "../styles/icons/PSN";
  import { SteamLogo } from "../styles/icons/Steam";


  
  export const Platform = ({ platform, setPlatform }: { platform: string, setPlatform: (value: string) => void }) => {

    const handlePlatformChange = (value: string) => {
        setPlatform(value);
        console.log(value);
    };

    return (
        <Select onValueChange={handlePlatformChange}>
            <SelectTrigger className="w-[180px] z-10">
                <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="X1">
                    <div className="flex items-center">
                        <h1 className="mr-20"> XBOX </h1>
                        <XboxLogo />
                    </div>
                </SelectItem>
                <SelectItem value="PS4">
                    <div className="flex items-center">
                        <h1 className="mr-20"> PSN </h1>
                        <PSNLogo className="ml-2"/>
                    </div>
                </SelectItem>
                <SelectItem value="PC">
                    <div className="flex items-center">
                        <h1 className="mr-2"> Steam/Origins ID </h1>
                        <SteamLogo />
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}
