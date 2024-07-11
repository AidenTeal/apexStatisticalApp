import { ApexDamageChart } from "@/components/charts/apexDamageChart";
import { ApexWinsChart } from "@/components/charts/apexWinsChart";
import { Button } from "@/components/ui/button";
import { ChartDashboard } from "@/components/charts/chartSelector";
import { UNSTABLE_REVALIDATE_RENAME_ERROR } from "next/dist/lib/constants";
import axios from 'axios';
import { getCachedData, setCachedData } from '../../../cache/cache';
import { playerData as Data} from "../../../cache/data";

interface Props {
  gamertag: string;
  platform: string;
}

const cache = {
  data: null as any,
  timestamp: 0,
};


const getPlayersStats = async (gamertag: string, platform: string) => {
  const cacheKey = `playersStats_${gamertag}_${platform}`;
  const cachedData = getCachedData(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const res = await fetch(`https://api.mozambiquehe.re/bridge?auth=${process.env.APEX_STATS_API}&player=${gamertag}&platform=${platform}`);
  
  if (!res.ok) {
    console.error('Failed to fetch player stats');
    return null;
  }

  try {
    const data = await res.json();
    setCachedData(cacheKey, data);
    console.log(data);
    return data;
  } catch (error) {
    console.error('Failed to parse JSON', error);
    return null;
  }
};

const getSeasonStats = async (gamertag: string, platform: string, season: string) => {
  const cacheKey = `seasonStats_${gamertag}_${platform}_${season}`;
  const cachedData = getCachedData(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  let trackerPlatform = platform;

  if (platform === 'X1') {
    trackerPlatform = "xbl";
    console.log("here");
  } else if (platform === 'PS4') {
    trackerPlatform = "psn";
  } else {
    trackerPlatform = "battlenet";
  }

  try {
    const response = await axios.get(
      `https://public-api.tracker.gg/api/v1/apex/standard/profile/${trackerPlatform}/${gamertag}`,
      {
        headers: {
          "TRN-Api-Key": process.env.TRACKER_API,
          "Accept": "application/json",
        }
      }
    );
    setCachedData(cacheKey, response.data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Page = async ({ params }: any) => {
  //const data = Promise.all([getPlayersStats(params.gamertag, params.platform), getSeasonStats(params.gamertag, params.platform, 20)]);
  const playerData = Data;
  //const playerSeasonData = await getSeasonStats(params.gamertag, params.platform, 20);
  //const playerData = null;

  if (!playerData) {
    return (
      <main className="min-h-screen px-4 md:px-8 xl:px-10 py-60">
        <h1> GamerTag: {params.gamertag} </h1>
        <h1> Platform: {params.platform} </h1>
        <h2> Failed to fetch player data. </h2>
      </main>
    );
  }

  const { global, legends, total, realtime } = playerData;

  return (
    <main className="min-h-screen px-4 md:px-8 xl:px-10 py-24">
      <div className="flex items-center justify-center font-TT-Octosquares">   
          <h1 className="sm:text-lg sm:m-4 md:text-xl lg:text-2xl lg:m-16"> GAMERTAG: {params.gamertag.toUpperCase()} </h1>
          <h1 className="ml-8 sm:text-lg md:text-xl lg:text-2xl lg:m-16"> PLATFORM: {params.platform.toUpperCase()} </h1>
          <h2 className="ml-8 sm:text-lg md:text-xl lg:text-2xl lg:m-16"> LEVEL: {global.level}</h2>
          <h2 className="ml-8 sm:text-lg md:text-xl lg:text-2xl lg:m-16"> RANK: {global.rank.rankName.toUpperCase()} </h2>
          {/*<img src={global.rank.rankImg} className="h-16 w-16 ml-4" alt={global.rank.rankName} /> */}
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 w-full gap-14 max-w-[1600px] mx-auto font-TT-Octosquares">
          <div className="bg-slate-900/50 rounded-xl flex flex-col text-center items-center p-4">
            <h1 className="text-xl mb-2 font-semibold"> Current Legend: {legends.selected.LegendName} </h1>
            <h2 className="text-lg mb-2 font-medium"> {legends.selected.LegendName} Stats </h2>
            <h3 className="text-base"> kills: {legends.all.Bangalore.data[0].value} </h3>
            <h3 className="text-base"> Global Kills Rank: #{legends.all.Bangalore.data[0].rank.rankPos} </h3>
            <h3 className="text-base"> Platform Specific Rank: #{legends.all.Bangalore.data[0].rankPlatformSpecific.rankPos} </h3>
          </div>
          <div className="bg-slate-900/50 rounded-xl flex flex-col text-center items-center p-4">
            <h1 className="text-xl mb-4 font-semibold"> General Information </h1>
            <h2  className="text-lg"> Total Kills: {total.kills.value} </h2>
            <h2  className="text-lg"> Total Damage: {total.damage.value} </h2>
          </div>
          <div className="bg-slate-900/50 rounded-xl flex flex-col text-center items-center p-4">
          <h1 className="text-xl mb-4 font-semibold"> Real Time Player Info </h1>
            <h2  className="text-lg"> Current Online State - {realtime.currentStateAsText} </h2>
            <h2  className="text-lg"> Current Legend - {realtime.selectedLegend} </h2>
          </div>
          <div className="bg-slate-900/50 rounded-xl flex flex-col text-center items-center p-4">
            <h1 className="text-xl mb-2 font-semibold"> Rank Info </h1>
            <h2  className="text-lg"> Current Rank: {global.rank.rankName} </h2>
            <div className="flex">
              <h2  className="text-lg"> Score - {global.rank.rankScore} </h2>
              <h2  className="text-lg ml-4"> Division - {global.rank.rankDiv} </h2>
            </div>
              <img src={global.rank.rankImg} className="w-16 mt-2"/>
          </div>
        </div>
        <div className="w-full font-TT-Octosquares mt-4">
          <ChartDashboard />
        </div>
    </main>
  );
};

export default Page;
