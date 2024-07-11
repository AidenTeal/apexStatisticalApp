'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../../components/ui/form"; 
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Platform } from "../../components/search/Platform";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const LinkSearch = () => {
    const [platform, setPlatform] = useState("");
    const [searchData, setSearchData] = useState({});

    const router = useRouter();

    const formSchema = z.object({
          account: z.string().min(4, {
            message: "Apex Legends Gamertag Must be at least 4 characters long",
          }), 
        })
        
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            account: "",
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        console.log(platform);  // This will log the selected platform
        
    }

    return (
        <main className="py-48 flex flex-col items-center h-screen justify-center">
            <Form {...form}>
            <div className="flex flex-col border border-2 rounded-lg lg:w-1/4 md:w-1/5 sm:w-1/6 h-3/4 items-center backdrop-blur-sm" style={{
                backgroundImage: "url('data:image/jpeg;base64,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')",
                backgroundPosition: "center", // Center the background image
                backgroundSize: "cover",      // Cover the entire container
                backgroundRepeat: "no-repeat", // Do not repeat the background image
                }}> 
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center p-8 backdrop-blur-sm h-full w-full">
              <h1 className="text-2xl mb-2" style={{color: "hsl(var(--foreground))"}}> Link Your Account </h1>
              <p className="text-center text-sm mb-12" style={{color: "hsl(var(--foreground))"}}> Linking your account allows for more advanced statistical tracking and greater insight into your growth as a player </p>
              <Platform platform={platform} setPlatform={setPlatform}/>
              <FormField
                  control={form.control}
                  name="account"
                  render={({ field }: any) => (
                  <FormItem className="w-2/3 mt-4">
                      <div className="flex">
                      <FormControl>
                          <Input placeholder="Apex Legends Player Tag" {...field} />
                      </FormControl>
                      </div>
                      <FormMessage />
                  </FormItem>
                  )}
              />
              <Button type="submit" className="ml-4 w-1/3 mt-4">
                  <p> Link Account </p>
              </Button>
              </form>
            </div>
        </Form>
      </main>
    );
};
