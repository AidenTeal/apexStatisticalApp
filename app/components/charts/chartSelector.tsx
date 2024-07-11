'use client'

import { useState } from "react";
import { Button } from "../ui/button"
import { ApexDamageChart } from "./apexDamageChart";
import { ApexWinsChart } from "./apexWinsChart";
import { ApexMatchesChart } from "./apexMatchChart";

const GridItem = ({ title, children }: any) => {
    return (
      <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        {children}
      </div>
    );
  }

export const ChartDashboard = () => {
    const [chartState, setChartState] = useState("all");

    const handleChangeState = (newState: string) => {
        setChartState(newState);
    }

    return (
        <>
            <div className="flex w-full gap-10 max-w-[1600px] mx-auto">
                <div className="w-7/12">
                    <Button className="mb-4 bg-transparent text-lg" onClick={() => handleChangeState("all")}> All </Button>
                    <Button className="mb-4 bg-transparent text-lg" onClick={() => handleChangeState("damage")}> Damage/Kills </Button>
                    <Button className="mb-4 bg-transparent text-lg" onClick={() => handleChangeState("wins")}> Wins/Games </Button>
                    <div>
                        {chartState === "all" && 
                        <div className="grid xl:grid-cols-2 lg:grid-cols-1 w-full gap-6 max-w-[1400px] mx-auto">
                            <GridItem title="Kills/Damage Per Season">
                                <ApexDamageChart />
                            </GridItem>
                            <GridItem title="Wins Per Season">
                                <ApexWinsChart />
                            </GridItem>
                        </div>
                        }
                        {chartState === "damage" && 
                        <div className="w-full gap-10 max-w-[1200px] mx-auto">
                            <GridItem title="Kills/Damage Per Season">
                                <ApexDamageChart />
                            </GridItem>
                        </div>
                        }
                        {chartState === "wins" && 
                        <div className="w-full gap-10 max-w-[1200px] mx-auto">
                            <GridItem title="Wins Per Season">
                                <ApexWinsChart />
                            </GridItem>
                        </div>
                        }
                    </div>
                </div>
                <div className="flex items-center w-5/12 pt-14">
                    <div className="grid xl:grid-cols-1 lg:grid-cols-1 w-full gap-10 max-w-[700px] mx-auto">
                        <GridItem title="Kills/Damage Per Match">
                            <ApexMatchesChart />
                        </GridItem>
                    </div>     
                </div>
            </div>
        </>
    )
}