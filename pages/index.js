
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { ethers, Transaction } from 'ethers';
import { useState, useEffect } from "react";
import Header from '../components/Header'
import Profile from '../components/Profile'
import Balance from '../components/Balance'
import Transaction1 from '@/components/Transactions';
const injected = new InjectedConnector();
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export default function Home() {
  const { activate, active, library: provider } = useWeb3React();
  const [hasMetamask, setHasMetamask] = useState(false);
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await activate(injected)
        setHasMetamask(true);
        console.log(active);
        const accounts = await ethereum.request({ method: "eth_accounts" });
        document.getElementById("accountLabel").innerHTML = 'Account: ' + accounts;
        console.log(accounts); // 打印当前账户
      } catch (e) {
        console.log(e);
      }
    }
  }

  if (!active) {
    return (
      hasMetamask ?
        (<div className='flex flex-col justify-center items-center  w-screen h-screen  bg-gradient-to-r from-cyan-500 to-purple-300 space-y-8'>
          <div className='text-6xl font-bold text-white'>Dashboard</div>
          <button className='btn bg-purple-500 text-sm' onClick={() => connect()}>Please Connect MetaMask</button>
        </div>)
        : (<div className='flex flex-col justify-center items-center  w-screen h-screen  bg-gradient-to-r from-cyan-500 to-purple-300 space-y-8'>
          <div className='text-6xl font-bold text-white'>Please Install Metamask </div>
        </div>)
    )
  }




  return (
    <>
      <div className='flex flex-col w-screen h-screen'>
        <Header />
        <div className='flex-1 px-44 py-20 bg-purple-200'>
          <Tabs size='lg' colorScheme='purple' align='center' variant='enclosed'>
            <TabList>
              <Tab fontWeight='bold'>Profile</Tab>
              <Tab fontWeight='bold'>Balance</Tab>
              <Tab fontWeight='bold'>Transactions</Tab>
              <Tab fontWeight='bold'>NFT</Tab>
              <Tab fontWeight='bold'>Send ETH</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Profile />
              </TabPanel>
              <TabPanel>
                <Balance />
              </TabPanel>
              <TabPanel>
                <Transaction1 />
              </TabPanel>
              <TabPanel>5</TabPanel>
              <TabPanel>5</TabPanel>
            </TabPanels>

          </Tabs>

        </div>
      </div>

    </>
  )
}
