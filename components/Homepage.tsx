import React from 'react'
import Image from "next/image";
import CustomButton from './CustomButton';
type Props = {}

export default function Homepage({ }: Props) {
    return (
        <section>
            <div>
                <h1>
                    <span>
                        Powered
                    </span>
                    <span>
                        By Intellect
                    </span>
                    <span>
                        Driven By Values
                    </span>
                </h1>
                <div className=''>
                    <CustomButton title='Buy Now'/>
                </div>
            </div>
        </section>
    )
}