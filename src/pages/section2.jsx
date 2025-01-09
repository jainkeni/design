import React from 'react';
import { Text, Input } from "@chakra-ui/react";
import { Card} from "@chakra-ui/react"
import { LuCheck, LuX } from "react-icons/lu"
import { GrUserWorker } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { Box } from '@chakra-ui/react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsBug } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";

const Section2 = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col px-11 gap-4 h-[60vh]">
        <div className='flex flex-col'>
            <Box
                className="flex relative items-center border border-gray-200 rounded-l-xl ml-6 bg-white mr-2"
                style={{ minHeight: "60px" }}
                >
                      <Input
                        type="text"
                        fontSize="2xl"
                        placeholder="Search"
                        bg="white"
                        px={20} 
                        py={2}
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
            <div className="row-span-3 col-span-2 ... text-black">
                <div className="grid grid-flow-row-dense grid-cols-3 py-4 mt-4 px-2 gap-8">
                    <div className="w-1/2= h-20 p-4 rounded-xl bg-white text-black border border-gray-200 "
                        display="flex"
                        alignItems="center"
                        justifyContent="center">Views <br/>
                        <div className='flex  space-x-10'>
                            <Text className='font-bold text-2xl '>7,265</Text>
                            <Text className='text-sm mt-1 flex '>+11.01% 
                                <FaArrowTrendUp className='mt-0.5 ml-1' />
                            </Text>
                        </div>
                    </div>
                    <div className="w-1/2= h-20 p-4 rounded-xl bg-white text-black border border-gray-200"
                        display="flex"
                        alignItems="center"
                        justifyContent="center">New Users
                        <div className='flex space-x-10'>
                            <Text className='font-bold text-2xl'>256</Text>
                            <Text className='text-sm mt-1 flex '>+15.03%
                                    <FaArrowTrendUp className='mt-0.5 ml-1' />
                            </Text>
                        </div>
                    </div>
                    <div className="w-1/2= h-20 p-4 rounded-xl bg-white text-black border border-gray-200"
                        display="flex"
                        alignItems="center"
                        justifyContent="center">Active Users
                        <div className='flex space-x-10'>
                            <Text className='font-bold text-2xl'>2,318</Text>
                            <Text className='text-sm mt-1 flex '>+6.08% 
                                    <FaArrowTrendUp className='mt-0.5 ml-1' />
                            </Text>
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-2 ">
                    <div className="rounded-xl bg-white text-cyan-300 border font-bold text-center border- flex justify-end w-4/5  flex-col text-5xl"> 112
                        <div className="rounded-lg bg-cyan-300 text-white text-xl font-bold border border-gray-200 flex justify-center items-center h-24 mt-7 ">Total OPD <br/> Patients</div>
                    </div>
                        <div className="rounded-xl bg-white text-sky-900 border font-bold text-center border-gray-200 flex justify-end w-4/5  flex-col text-5xl "> 04
                    <   div className="rounded-lg bg-sky-900 text-white text-xl font-bold border border-black flex justify-center items-center h-24 mt-7">Total IPD <br/> Patients</div>
                </div>
                    
                    <div className='col-span-2'>
                        <Card.Root className='border border-gray-200' width="full" height="full" rounded="xl"  >
                            <Card.Body>
                                <Text fontWeight="semibold" textStyle="md">
                                    Notifications
                                </Text>
                            </Card.Body>
                            <Card.Footer>
                            <div className="grid grid-rows-3 grid-flow-col -mt-2 ">
                                <div className='flex'>
                                    <BsBug className='mt-1 mr-1 bg-sky-200 rounded-md' />
                                        <div className='flex flex-col mb-1'>
                                            <Text className='text-sm'>
                                                You fixed a bug.
                                            </Text>
                                            <Text className='text-xs text-gray-300 -mt-1'>
                                                Just now
                                            </Text>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                    <LuUserRound className='mr-1 bg-blue-100 rounded-md' />
                                        <div className='flex flex-col mb-1'>
                                            <Text className='text-sm'>
                                            New user regis...
                                            </Text>
                                            <Text className='text-xs text-gray-300 -mt-1'>
                                            Just now
                                            </Text>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                    <LuUserRound className='mr-1 bg-blue-100 rounded-md' />
                                        <div className='flex flex-col mb-1'>
                                            <Text className='text-sm'>
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
                                        <div className='flex flex-col mb-1'>
                                            <Text className='text-sm'>
                                            You fixed a bug.
                                            </Text>
                                            <Text className='text-xs text-gray-300 -mt-1'>
                                            Just now
                                            </Text>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                    <LuUserRound className='mr-1 bg-blue-100 rounded-md' />
                                        <div className='flex flex-col mb-1'>
                                            <Text className='text-sm'>
                                            New user regis...
                                            </Text>
                                            <Text className='text-xs text-gray-300 -mt-1'>
                                            Just now
                                            </Text>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                    <LuUserRound className='mr-1 bg-blue-100 rounded-md' />
                                        <div className='flex flex-col mb-1'>
                                            <Text className='text-sm'>
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
        <div className="row-span-3 col-span-3 ... bg-white rounded-xl px-4 text-black h-[48vh]">
            <Text className='mt-2 mb-2' fontSize="2xl" fontWeight="bold" p="1">Employee Status</Text>
            <div className="grid p-4 gap-y-4 grid-cols-3 ">
                <div className="rounded-xl bg-white text-sky-900 border font-bold text-center border-gray-200 flex justify-end w-4/5 h-48 flex-col text-5xl "> 04
                    <div className="rounded-lg bg-sky-900 text-white text-2xl font-bold border border-black flex justify-center items-center h-24 mt-7">Present <br/> GDA</div>
                </div>
                <div className="rounded-xl bg-white text-sky-900 border font-bold text-center border-gray-200 flex justify-end w-4/5 h-48 flex-col text-5xl "> 04
                    <div className="rounded-lg bg-sky-900 text-white text-2xl font-bold border border-black flex justify-center items-center h-24 mt-7">Present <br/> Staff</div>
                </div>
                <div className="rounded-xl bg-white  text-sky-900 border font-bold text-center border-gray-200 flex justify-end w-4/5 h-48 flex-col text-5xl "> 04
                    <div className="rounded-lg bg-sky-900 text-white text-2xl font-bold border border-black flex justify-center items-center h-24 mt-7">Present <br/> Doctors</div>
            </div>
                <div className="rounded-xl bg-sky-900 text-white text-xl flex justify-center h-14 items-center p-3 mt-8 col-span-3 mr-8">Employ management</div>
            </div>
        </div>
    </div>
  )
}

export default Section2;
