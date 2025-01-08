import React from 'react';
import { Text, Input } from "@chakra-ui/react";
import { Card} from "@chakra-ui/react"
import { LuCheck, LuX } from "react-icons/lu"
import { GrUserWorker } from "react-icons/gr";

const Section2 = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col px-11 gap-4 h-[60vh]">
        <div className='flex flex-col'>
            <div className="col-span-2 ...  text-black pb-4 rounded-xl">
                <Input 
                    type="text" 
                    placeholder="Search" 
                    bg="white" 
                    px={3} 
                    py={1}  
                />
            </div>
            <div className="row-span-3 col-span-2 ...  border-black text-black">
                <div class="grid grid-flow-row-dense grid-cols-3 p-2 gap-8">
                    <div className="w-1/2= h-20 p-2 rounded-xl bg-white text-black border border-gray-200"
                        display="flex"
                        alignItems="center"
                        justifyContent="center">Views <br/>
                        <Text className='font-bold text-xl'>7265</Text>
                    </div>
                    <div className="w-1/2= h-20 p-2 rounded-xl bg-white text-black border border-gray-200"
                        display="flex"
                        alignItems="center"
                        justifyContent="center">New Users
                        <Text className='font-bold text-xl'>256</Text>
                    </div>
                    <div className="w-1/2= h-20 p-2 rounded-xl bg-white text-black border border-gray-200"
                        display="flex"
                        alignItems="center"
                        justifyContent="center">Active Users
                        <Text className='font-bold text-xl'>2318</Text>
                    </div>
                </div>
                <div class="grid grid-flow-row-dense grid-cols-4 grid-rows-2 ...">
                    <div className="rounded-xl bg-white text-cyan-300 border font-bold text-center border- flex justify-end w-4/5  flex-col text-5xl"> 112
                    <div className="rounded-lg bg-cyan-300 text-white text-xl font-bold border border-gray-200 flex justify-center h-24 mt-7 ">Total OPD <br/> Patients</div>
                    </div>
                    <div className="rounded-xl bg-white text-sky-900 border font-bold text-center border-gray-200 flex justify-end w-4/5  flex-col text-5xl "> 04
                    <   div className="rounded-lg bg-sky-900 text-white text-xl font-bold border border-black flex justify-center h-24 mt-7">Total IPD <br/> Patients</div>
                    </div>
                    
                    <div className='col-span-2'>
                        <Card.Root width="320px">
                            <Card.Body>
                                <Text fontWeight="semibold" textStyle="lg">
                                    Notifications
                                </Text>
                            </Card.Body>
                            <Card.Footer>
                            <div class="grid grid-rows-3 grid-flow-col gap-4">
                            <div className='flex'>
                                    <LuX />
                                    <div className='flex flex-col'>
                                        <Text>
                                            Fixed a bug
                                        </Text>
                                        <Text className='text-xs text-gray-300'>
                                            Just now
                                        </Text>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <LuX />
                                    <div className='flex flex-col'>
                                        <Text>
                                        Fixed a bug
                                        </Text>
                                        <Text className='text-xs text-gray-300'>
                                        Just now
                                        </Text>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <LuX />
                                    <div className='flex flex-col'>
                                        <Text>
                                        Fixed a bug
                                        </Text>
                                        <Text className='text-xs text-gray-300'>
                                        Just now
                                        </Text>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <LuX />
                                    <div className='flex flex-col'>
                                        <Text>
                                        Fixed a bug
                                        </Text>
                                        <Text className='text-xs text-gray-300'>
                                        Just now
                                        </Text>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <LuX />
                                    <div className='flex flex-col'>
                                        <Text>
                                        Fixed a bug
                                        </Text>
                                        <Text className='text-xs text-gray-300'>
                                        Just now
                                        </Text>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <LuX />
                                    <div className='flex flex-col'>
                                        <Text>
                                        Fixed a bug
                                        </Text>
                                        <Text className='text-xs text-gray-300'>
                                        Just now
                                        </Text>
                                    </div>
                                </div>
                            </div>
                                
                            </Card.Footer>
                        </Card.Root>
                    </div>
                </div>
            </div>
        </div>
        <div className="row-span-3 col-span-3 ... bg-white rounded-xl px-4 text-black h-[58vh]">
        
            <Text fontSize="2xl" fontWeight="bold" p="1">Employee Status</Text>
            <div class="grid p-4 gap-y-4 grid-cols-3 ">
                <div className="rounded-xl bg-white text-sky-900 border font-bold text-center border-gray-200 flex justify-end w-4/5 h-48 flex-col text-5xl "> 04
                    <div className="rounded-lg bg-sky-900 text-white text-2xl font-bold border border-black flex justify-center h-24 mt-7">Present <br/> GDA</div>
                </div>
                <div className="rounded-xl bg-white text-sky-900 border font-bold text-center border-gray-200 flex justify-end w-4/5 h-48 flex-col text-5xl "> 04
                    <div className="rounded-lg bg-sky-900 text-white text-2xl font-bold border border-black flex justify-center h-24 mt-7">Present <br/> Staff</div>
                </div>
                <div className="rounded-xl bg-white  text-sky-900 border font-bold text-center border-gray-200 flex justify-end w-4/5 h-48 flex-col text-5xl "> 04
                    <div className="rounded-lg bg-sky-900 text-white text-2xl font-bold border border-black flex justify-center h-24 mt-7">Present <br/> Doctors</div>
            </div>
            <div className="rounded-xl bg-sky-900 text-white text-xl  border border-black flex justify-center h-12 p-3 mb-4">Employ management</div>
            </div>
        </div>

        
    </div>
  )
}

export default Section2;
