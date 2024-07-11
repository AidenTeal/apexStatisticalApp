'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../ui/form"; 
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Platform } from "./Platform";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
    const [platform, setPlatform] = useState("");
    const [searchData, setSearchData] = useState({});

    const router = useRouter();

    const formSchema = z.object({
          gamertag: z.string().min(4, {
            message: "Apex Legends Gamertag Must be at least 4 characters long",
          }), 
        })
        
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gamertag: "",
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        console.log(platform);  // This will log the selected platform
        if (platform !== "") {
          setSearchData({
            gamertag: values.gamertag,
            platform: platform
          })
          router.push(`/apexstats/${platform}/${values.gamertag}`);
        }
    }

    return (
        <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex my-12 border p-8 rounded-lg lg:w-1/2 md:w-2/3 sm:w-3/4 justify-center items-center">
        <Platform platform={platform} setPlatform={setPlatform} />
          <FormField
            control={form.control}
            name="gamertag"
            render={({ field }) => (
              <FormItem className="w-2/3">
                <div className="flex">
                  <h1 className="flex items-center text-lg mr-2 ml-4">GamerTag:</h1>
                  <FormControl>
                    <Input placeholder="Apex Legends Player Tag" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="ml-4 w-1/4">Search</Button>
        </form>
      </Form>
    );
};
