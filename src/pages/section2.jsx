import React from 'react';
import { Text, Input } from "@chakra-ui/react";
import { Card} from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { Box } from '@chakra-ui/react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsBug } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";

const Section2 = () => {
  return (
    <div className="flex flex-col lg:flex-row grid-rows-3 grid-flow-col px-11 gap-4 lg:h-[60vh]">
        <div className='flex flex-col '>
            <Box
                className="flex relative items-center border border-gray-200 rounded-xl lg:rounded-l-xl lg:ml-4 bg-white lg:w-5/6"
                style={{ minHeight: "60px" }}
                >
                      <Input className='text-2xl bg-white px-20 py-2'
                        placeholder="Search"
                        _placeholder={{
                          color: "gray.300",  
                        }}
                      />
                      <CiSearch
                        className="text-gray-300 text-4xl"
                        style={{
                          position: "absolute",
                          top: "50%",
                          transform: "translateY(-50%)",
                          left: "28px"
                        }}
                      />
                </Box>
            <div className="row-span-3 col-span-2 text-black">
                <div className="grid grid-flow-row-dense grid-cols-3 py-4 mt-4 md:px-4 lg:px-2 gap-8 lg:gap-0">
                    <div className="w-24 md:w-48 lg:w-40 h-26 md:h-24 p-4 rounded-xl bg-white text-black border border-gray-200 text-sm md:text-lg items-center"
                        display="flex"
                        justifyContent="center">Views <br/>
                        <div className='flex flex-col md:flex-row md:space-x-8'>
                            <Text className='font-bold md:text-2xl text-lg lg:-mr-4'>7,265</Text>
                            <Text className='flex text-xs mt-1 md:text-sm lg:text-xs lg:mt-2'>+11.01% 
                                <FaArrowTrendUp className='mt-0.5 md:ml-1' />
                            </Text>
                        </div>
                    </div>
                    <div className="w-24 md:w-48 lg:w-40 h-26 md:h-24 p-4 rounded-xl bg-white text-black border border-gray-200 text-sm md:text-lg"
                        display="flex"
                        justifyContent="center">New Users
                        <div className='flex flex-col md:flex-row md:space-x-8'>
                            <Text className='font-bold md:text-2xl text-lg lg:-mr-4'>256</Text>
                            <Text className='flex text-xs mt-1 md:text-sm lg:text-xs lg:mt-2'>+15.03%
                                    <FaArrowTrendUp className='mt-0.5 ml-1' />
                            </Text>
                        </div>
                    </div>
                    <div className="w-24 md:w-48 lg:w-40 h-26 md:h-24 p-4 rounded-xl bg-white text-black border border-gray-200 text-sm md:text-lg"
                        display="flex"
                        justifyContent="center">Active Users
                        <div className='flex flex-col md:flex-row md:space-x-8'>
                            <Text className='font-bold md:text-2xl text-lg lg:-mr-4'>2,318</Text>
                            <Text className='flex text-xs mt-1 md:text-sm lg:text-xs lg:mt-2'>+6.08% 
                                    <FaArrowTrendUp className='mt-0.5 ml-1' />
                            </Text>
                        </div>
                    </div>
                </div>
                <div className="md:flex grid-flow-row-dense grid-cols-4 grid-rows-2 lg:mt-2">
                    <div className='flex space-x-8 mb-4 lg:mb-0 lg:ml-2'>
                        <div className="rounded-xl bg-white text-cyan-300 font-bold text-center flex justify-end w-4/5 flex-col lg:text-5xl text-4xl"> <Text className='flex items-center justify-center h-20'>112</Text>
                            <div className="rounded-lg bg-cyan-300 text-white text-xl font-bold flex justify-center items-center h-24 lg:mt-7">Total OPD <br/> Patients</div>
                        </div>
                        <div className="rounded-xl bg-white text-sky-900 font-bold text-center flex justify-end w-4/5  flex-col lg:text-5xl text-4xl "> 
                        <Text className='flex items-center justify-center h-20'>04</Text>
                            <div className="rounded-lg bg-sky-900 text-white text-xl font-bold flex justify-center items-center h-24 
                            lg:mt-7">Total IPD <br/> Patients</div>
                        </div>
                    </div>
                    
                    <div className='col-span-2 lg:ml-4'>
                        <Card.Root className='border border-gray-200 w-full h-full rounded-xl lg:w-11/12' >
                            <Card.Body>
                                <Text className='font-semibold text-md'>
                                    Notifications
                                </Text>
                            </Card.Body>
                            <Card.Footer>
                            <div className="grid grid-rows-3 grid-flow-col -mt-2 ">
                                <div className='flex'>
                                    <BsBug className='mt-1 mr-1 bg-sky-200 rounded-md' />
                                        <div className='flex flex-col mb-1 lg:mb-2'>
                                            <Text className='text-sm lg:text-xs lg:mb-1'>
                                                You fixed a bug.
                                            </Text>
                                            <Text className='text-xs text-gray-300 -mt-1'>
                                                Just now
                                            </Text>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                    <LuUserRound className='mr-1 bg-blue-100 rounded-md' />
                                        <div className='flex flex-col mb-1 lg:mb-2'>
                                            <Text className='text-sm lg:text-xs lg:mb-1'>
                                            New user regis...
                                            </Text>
                                            <Text className='text-xs text-gray-300 -mt-1'>
                                            Just now
                                            </Text>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                    <LuUserRound className='mr-1 bg-blue-100 rounded-md' />
                                        <div className='flex flex-col mb-1 lg:mb-2'>
                                            <Text className='text-sm lg:text-xs lg:mb-1'>
                                            New user regis...
                                            </Text>
                                            <Text className='text-xs text-gray-300 -mt-1'>
                                            Just now
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-rows-3 grid-flow-col ml-8 -mt-6 ">
                                    <div className='flex '>
                                    <BsBug className='mt-1 mr-1 bg-sky-200 rounded-md' />
                                        <div className='flex flex-col mb-1 lg:mb-2'>
                                            <Text className='text-sm lg:text-xs lg:mb-1'>
                                            You fixed a bug.
                                            </Text>
                                            <Text className='text-xs text-gray-300 -mt-1'>
                                            Just now
                                            </Text>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                    <LuUserRound className='mr-1 bg-blue-100 rounded-md' />
                                        <div className='flex flex-col '>
                                            <Text className='text-sm lg:text-xs lg:mb-1'>
                                            New user regis...
                                            </Text>
                                            <Text className='text-xs text-gray-300 -mt-1'>
                                            Just now
                                            </Text>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                    <LuUserRound className='mr-1 bg-blue-100 rounded-md' />
                                        <div className='flex flex-col'>
                                            <Text className='text-sm lg:text-xs lg:mb-1'>
                                            New user regis...
                                            </Text>
                                            <Text className='text-xs text-gray-300 -mt-1'>
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
        <div className="row-span-3 col-span-3 bg-white rounded-xl px-4 text-black md:h-[43vh] lg:h-[55.5vh] border border-gray-200">
            <Text className='mt-2 mb-2 text-2xl font-bold p-1'>Employee Status</Text>
            <div className="grid lg:p-4 p-2 gap-y-4 grid-cols-3 md:ml-2 md:-mr-8">
                <div className="rounded-xl bg-white text-sky-900 border font-bold text-center border-gray-200 flex justify-end w-20 md:w-4/5 h-48 flex-col lg:text-5xl text-4xl "> 04
                    <div className="rounded-lg bg-sky-900 text-white lg:text-2xl text-xl font-bold border border-black flex justify-center items-center h-24 mt-7">Present <br/> GDA</div>
                </div>
                <div className="rounded-xl bg-white text-sky-900 border font-bold text-center border-gray-200 flex justify-end w-20 md:w-4/5 h-48 flex-col lg:text-5xl text-4xl "> 04
                    <div className="rounded-lg bg-sky-900 text-white lg:text-2xl text-xl font-bold border border-black flex justify-center items-center h-24 mt-7">Present <br/> Staff</div>
                </div>
                <div className="rounded-xl bg-white  text-sky-900 border font-bold text-center border-gray-200 flex justify-end w-20 md:w-4/5 h-48 flex-col lg:text-5xl text-4xl "> 04
                    <div className="rounded-lg bg-sky-900 text-white lg:text-2xl text-xl font-bold border border-black flex justify-center items-center h-24 mt-7">Present <br/> Doctors</div>
            </div>
                <div className="rounded-xl bg-sky-900 text-white text-xl flex justify-center h-14 items-center p-3 lg:mt-8  col-span-3 lg:mr-8 mr-4 md:mr-10">Employ management</div>
            </div>
        </div>
    </div>
  )
}

export default Section2;
