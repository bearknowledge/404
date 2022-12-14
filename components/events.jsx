import { GraphQLClient } from 'graphql-request';
import {ScrollAnimation} from './ScrollAnimation/index'
import { useState, useEffect } from 'react';


export default function Events() {


  const getContent = async () => {

  const hygraph = new GraphQLClient(
    'https://api-us-east-1.hygraph.com/v2/cl86k20g8006201ta81uj0r2z/master'
  );
  
    const { liveEvents } = await hygraph.request(
      `
     {
        liveEvents {
          eventType
          eventDetails
          eventDateTime
          eventName
          eventAddress
          eventBrite
        }
      }
    `
    );

  

setContent(liveEvents)

  }


const [content, setContent] = useState();

  


useEffect(() => {
  getContent();
}, []);



    return (

     

<div className="text-[black] body-font flex flex-col justify-center items-center">
  <h1 className="text-[20px] laptop:text-[50px] text-center">Get involved with our upcoming events</h1>
  <div className="mobile:container px-0 py-0 laptop:container px-5 py-6 mx-auto">
    <div className="mobile:flex flex-col px-0 py-0 laptop:flex laptop:flex-row laptop:px-5 laptop:py-24 mx-auto">
      {content === undefined ? ("") : (
      <div className="py-8 laptop:w-1/3">
      <ScrollAnimation
animation="fade-down">
       <div className="h-full flex items-start">
    
    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
      <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{new Date(content[0].eventDateTime).toLocaleDateString("en-US", {month: 'short'})}</span>
      <span className="font-medium text-lg text-gray-800 title-font leading-none">{new Date(content[0].eventDateTime).toLocaleDateString("en-US", {day:'numeric'})}</span>
    </div>
    <div className="flex-grow pl-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-blue-300 mb-1">{content[0].eventType}</h2>
      <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{content[0]?.eventName}</h1>
      <span className="title-font font-medium text-gray-900">{content[0]?.eventAddress}</span><br></br><br></br>
      <p className="leading-relaxed mb-5">{content[0]?.eventDetails}</p>
      <a className="inline-flex items-center">
      {content[0].eventBrite === null ? ("") : (
       <span className="flex-grow flex flex-col">
          <a href={"" + content[0]?.eventBrite }  
     target="blank" className="title-font font-medium text-gray-900 underline">More Information Here</a>
        </span>
      )}
      </a>
    </div>
  </div>
        </ScrollAnimation>
      </div>
      )}
  
  {content === undefined ? ("") : (
      <div className="py-8 laptop:w-1/3">
      <ScrollAnimation
animation="fade-down">
       <div className="h-full flex items-start">
    
    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
      <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{new Date(content[1].eventDateTime).toLocaleDateString("en-US", {month: 'short'})}</span>
      <span className="font-medium text-lg text-gray-800 title-font leading-none">{new Date(content[1].eventDateTime).toLocaleDateString("en-US", {day:'numeric'})}</span>
    </div>
    <div className="flex-grow pl-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-blue-300 mb-1">{content[1].eventType}</h2>
      <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{content[1].eventName}</h1>
      <span className="title-font font-medium text-gray-900">{content[1].eventAddress}</span><br></br><br></br>
      <p className="leading-relaxed mb-5">{content[1].eventDetails}</p>
      <a className="inline-flex items-center">
      {content[1].eventBrite === null ? ("") : (
       <span className="flex-grow flex flex-col">
          <a href={"" + content[1].eventBrite} 
     target="blank" className="title-font font-medium text-gray-900 underline">More Information Here</a>
        </span>
      )}
      </a>
    </div>
  </div>
        </ScrollAnimation>
      </div>
      )}

{content === undefined ? ("") : (
      <div className="py-8 laptop:w-1/3">
      <ScrollAnimation
animation="fade-down">
       <div className="h-full flex items-start">
    
    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
      <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{new Date(content[2].eventDateTime).toLocaleDateString("en-US", {month: 'short'})}</span>
      <span className="font-medium text-lg text-gray-800 title-font leading-none">{new Date(content[2].eventDateTime).toLocaleDateString("en-US", {day:'numeric'})}</span>
    </div>
    <div className="flex-grow pl-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-blue-300 mb-1">{content[2].eventType}</h2>
      <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{content[2]?.eventName}</h1>
      <span className="title-font font-medium text-gray-900">{content[2]?.eventAddress}</span><br></br><br></br>
      <p className="leading-relaxed mb-5">{content[2]?.eventDetails}</p>
      <a className="inline-flex items-center">
      {content[2].eventBrite === null ? ("") : (
       <span className="flex-grow flex flex-col">
          <a href={"" + content[2].eventBrite} 
     target="blank" className="title-font font-medium text-gray-900 underline">More Information Here</a>
        </span>
         )}
      </a>
       
    </div>
  </div>
        </ScrollAnimation>
      </div>
      )}

    </div>
  </div>
</div>

)
}