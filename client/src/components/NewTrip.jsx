import React from "react";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
const NewTrip = () => {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null,
    });

    return (
        <>
            <div>
                <h1 className="text-[#fff] font-bold text-xl">
                    Plan a new trip
                </h1>
                <div class="w-62">
                    <div class="w-full max-w-sm min-w-[200px] mb-4">
                        <input
                            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Cox's Bazar, Paris ..."
                        />
                    </div>

                    <Datepicker
                        classNames="w-64"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </div>
            </div>
        </>
    );
};

export default NewTrip;
