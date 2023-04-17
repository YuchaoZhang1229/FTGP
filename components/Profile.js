import CustomContainer from "./CustomContainer";
import { ethers } from 'ethers';
import { useState, useEffect } from "react";
import { abi } from 'constants/abi.js' // abi
import { useWeb3React } from '@web3-react/core';

export default function Profile() {
    const { activate, active, library: provider } = useWeb3React();

    async function getBalanceLINK() {
        console.log(active)
        if (active) {
            const signer = provider.getSigner();
            const contractAddress = "0x244274e5411faE385fF3655DC61D948b13FfC807";
            const contract = new ethers.Contract(contractAddress, abi, signer);

            try{

                var Balance = await contract.getBalanceLINK();
                document.getElementById('link').innerHTML="Link Balance: "+Balance

                var Balance = await contract.getBalanceALINK();
                document.getElementById('alink').innerHTML="ALink Balance: "+Balance
      

                var Balance = await contract.LINKWallet();
                document.getElementById('wallet').innerHTML="Wallet Link Balance: "+Balance


            } catch(e) {
                console.log(e);
            }
        } else {
            alert("Please Connect Metamask")
        }
    }

    async function supplyLiquidity() {
        console.log(active)
        if (active) {
            const signer = provider.getSigner();
            const contractAddress = "0x244274e5411faE385fF3655DC61D948b13FfC807";
            const contract = new ethers.Contract(contractAddress, abi, signer);

            try{
                var linknumbersupply = document.getElementById('supply').value
                console.log(linknumbersupply);
                await contract.supplyLiquidityLINK(linknumbersupply);


            } catch(e) {
                console.log(e);
            }
        } else {
            alert("Please Connect Metamask")
        }
    }

    async function withdrawLiquidity() {
        console.log(active)
        if (active) {
            const signer = provider.getSigner();
            const contractAddress = "0x244274e5411faE385fF3655DC61D948b13FfC807";
            const contract = new ethers.Contract(contractAddress, abi, signer);

            try{
                var linknumberwithdraw = document.getElementById('withdraw').value
                console.log(linknumberwithdraw);
                await contract.withdrawlLiquidity(linknumberwithdraw);

            } catch(e) {
                console.log(e);
            }
        } else {
            alert("Please Connect Metamask")
        }
    }
    
    async function withdrawToWallet() {
        console.log(active)
        if (active) {
            const signer = provider.getSigner();
            const contractAddress = "0x244274e5411faE385fF3655DC61D948b13FfC807";
            const contract = new ethers.Contract(contractAddress, abi, signer);

            try{

                await contract.withdrawLINK();


            } catch(e) {
                console.log(e);
            }
        } else {
            alert("Please Connect Metamask")
        }

    }

    async function depositTothisContract() {
        console.log(active)
        if (active) {
            const signer = provider.getSigner();
            const contractAddress = "0x244274e5411faE385fF3655DC61D948b13FfC807";
            const contract = new ethers.Contract(contractAddress, abi, signer);

            try{

                await contract.depositLink();


            } catch(e) {
                console.log(e);
            }
        } else {
            alert("Please Connect Metamask")
        }
    }


     
    return (
        <CustomContainer>
            <div className="flex flex-col space-y-5 ">
                <h2>Contract Address:</h2> <span>0x244274e5411faE385fF3655DC61D948b13FfC807</span> 
                
       
                
                <div id="link">Link token:</div>
                <div id="alink">ALink token:</div>
                <div id="wallet">Wallet Link token:</div>

                <button className="btn" onClick={()=>getBalanceLINK()}>getBlance</button>

                <div>Please type the number of link you want supply</div>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="" id="supply"/>
                <button className="btn" onClick={()=>supplyLiquidity()}>supply Liquidity</button>



                <div>Please type the number of link you want withdraw</div>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="" id="withdraw"/>
                <button className="btn" onClick={()=>withdrawLiquidity()}>withdraw Liquidity</button>



                <button className="btn" onClick={()=>withdrawToWallet()}>Withdraw Link Token to My Wallet</button>
                <button className="btn" onClick={()=>depositTothisContract()}>Deposit to this contract</button>
            </div>

        </CustomContainer>

    )
}