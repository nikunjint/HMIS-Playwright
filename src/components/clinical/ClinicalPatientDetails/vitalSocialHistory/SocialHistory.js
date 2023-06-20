import React from 'react'
import Common from '../../../common'
import { HiUser } from 'react-icons/hi'
import { options } from '../../../../utiles/sider'

const SocialHistory = () => {
    return (
        <div>
            <Common.AntdCard title="SOCIAL HISTORY" icon={<HiUser />} bg="#0d2f66" tc='white'>
                <div className="flex items-center justify-content-center socialhistory">
                    <div className="w-full grid-flow-row  gap-x-4 gap-y-0 lg:grid lg:grid-cols-6">
                        <Common.Selects
                            array={[
                                { id: 1 },
                                { id: 2 },
                                { id: 3 },
                                { id: 4 },
                                { id: 5 },
                                { id: 6 },
                            ]}
                            label="Occupation:"
                            value={"id"}
                            isfield="true"
                            name="occupation"
                            hidelabel
                        />
                        <Common.Selects
                            array={[
                                { id: 1 },
                                { id: 2 },
                                { id: 3 },
                                { id: 4 },
                                { id: 5 },
                                { id: 6 },
                            ]}
                            label="Education:"
                            value={"id"}
                            isfield="true"
                            name="education"
                            hidelabel
                        />
                        <Common.Selects
                            array={[
                                { id: 1 },
                                { id: 2 },
                                { id: 3 },
                                { id: 4 },
                                { id: 5 },
                                { id: 6 },
                            ]}
                            label="Year:"
                            value={"id"}
                            isfield="true"
                            name="year"
                            hidelabel
                        />
                        <Common.Inputs
                            name="pob"
                            hidelabel
                            className="mb-0"
                            placeholder="Birth Place"

                        />
                        <Common.AntRadio options={options} className="text-sm -mt-2 antradio" label='Smoking' name="smoking" />
                        <Common.AntRadio options={options} className="text-sm -mt-2 antradio" label='Alcohol Consumption' name="alcoholconsumption" />

                        <Common.Inputs
                            name="substance"
                            hidelabel
                            className="mb-0"
                            placeholder="Substance Use"

                        />
                        <Common.Selects
                            array={[
                                { id: 1 },
                                { id: 2 },
                                { id: 3 },
                                { id: 4 },
                                { id: 5 },
                                { id: 6 },
                            ]}
                            label="Marital Status"
                            value={"id"}
                            isfield="true"
                            name="marital"
                            hidelabel
                        />
                        <Common.Inputs
                            name="children"
                            hidelabel
                            className="mb-0"
                            placeholder="Childern"

                        />
                        <Common.Selects
                            array={[
                                { id: 1 },
                                { id: 2 },
                                { id: 3 },
                                { id: 4 },
                                { id: 5 },
                                { id: 6 },
                            ]}
                            label="Select Religion"
                            value={"id"}
                            isfield="true"
                            name="religion"
                            hidelabel
                        />
                        <Common.Inputs
                            name="exercise"
                            hidelabel
                            className="mb-0"
                            placeholder="Excercies"

                        />
                        <Common.Inputs
                            name="diet"
                            hidelabel
                            className="mb-0"
                            placeholder="General Diet"

                        />
                        <Common.Inputs
                            name="streetfactor"
                            hidelabel
                            className="mb-0"
                            placeholder="Strees Factor"

                        />


                    </div>
                </div>
            </Common.AntdCard>
        </div>
    )
}
export default SocialHistory

