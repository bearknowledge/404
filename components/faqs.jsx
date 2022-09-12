import React from "react"
import {ScrollAnimation} from "./ScrollAnimation";




export default function Faqs() {
  return (
<div>
      <section class="text-gray-700">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
          <ScrollAnimation
animation="flip-right">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              
              Frequently Asked Questions
            </h1>

            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about DAOs have been included to make sure everyone is up to speed 👍 
            </p>
            </ScrollAnimation>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                 What is a DAO?
                </summary>

                <span>
                A DAO is a business that is governed by smart contracts instead of people, which allow the business to operate autonomously. 
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                How is a DAO different from a normal LLC?
                </summary>

                <span>
                A normal LLC is managed by one or more human owners, called “members”. These members will make all of the decisions for the business and have the final say on all business matters. A DAO is usually managed by an algorithm, though it can also have human members. 
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                What is a smart contract?
                </summary>

                <span>
                A smart contract is code that runs “on top” of a blockchain that executes when particular conditions are met. They can make decisions, distribute profits, and carry out other tasks. 
                </span>
              </details>
            
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                How is a DAO Governed?
                </summary>

                <span> Governance of DAO is based on completely automated self-enforcing protocols .i.e smart contracts. The governance can be either on-chain governance or off-chain governance. On-chain governance is carried out through a sequence of proposals that members vote on via the blockchain, and having more governance tokens often translates to having more voting power.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How to join 404 DAO?
                </summary>

                <span>
                 Reach out to a member on Twitter, Discord or in person. You can find the core team's socials on the <a href="/team" className="underline text-green-400">team</a> page.
                </span>
              </details>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}