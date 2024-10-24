import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import preview from "../assets/preview.png";  
const ImageUpload = () => {
    const navigate=useNavigate()
    const [description, setDescription] = useState("");
    const [uploading, setUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [upload,setUpload]=useState(true)
    const [loading,setLoading]=useState(false)
    const [image,setImage]=useState(null)
    const handleImageUpload = (uploadedImage) => {
        setImage(uploadedImage);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImgData(event.target.files[0]);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
            setUpload(false);
        };
        reader.readAsDataURL(file);
    };
    const handleUpload = async () => {  }
    const handleCancel =async()=>{

    }
    return (
        <section className=" fixed w-full backdrop-blur-[6px] bg-black/15 h-[110vh] font-sans z-20">
            <div className="flex w-[800px] flex-col items-center justify-center px-6 py-8 mx-auto ">
                <div className="w-full bg-[#faf6f6] rounded-lg border h-[90vh] shadow-md mt-[20px] overflow-scroll">
                    <div className="flex justify-end">
                        <p
                            className="px-4  text-gray-600 text-[20px] cursor-pointer hover:text-gray-900 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-100"
                            onClick={()=>useNavigate('/')}
                        >
                            x
                        </p>
                    </div>
                    <div class="flex flex-col justify-center p-4">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl flex justify-center">
                            <span class="text-blue-700 px-2 font-bold">Save</span>
                            {} Save your experiences
                        </h1>
                        <h2 class="text-gray-600 font-semibold flex justify-center ">
                            Upload an images you took during your trip
                        </h2>
                        {upload ? (
                            <div class="flex items-center justify-center w-4/5 h-1/6 p-10">
                                <label
                                    for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-200  hover:bg-gray-300 "
                                >
                                    <div class="flex flex-col items-center justify-center pt-4 pb-4">
                                        <svg
                                            class="w-8 h-8 mb-4 text-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500">
                                            <span class="font-semibold">
                                                Click to upload
                                            </span>{" "}
                                            or drag and drop
                                        </p>
                                        <p class="text-xs text-gray-500">
                                            JPEG, JPG or PNG
                                        </p>
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        name="myImage"
                                        accept="image/png, image/jpg, image/jpeg"
                                        class="hidden"
                                        onChange={handleImageChange}
                                        
                                    />
                                </label>
                            </div>
                        ) : (
                            <div class="flex flex-col justify-center items-center p-2 m-2">
                                <img
                                    class="size-80 border border-gray-200 rounded-md shadow-sm"
                                    src={image}
                                    alt="image"
                                />
                                <div className="flex flex-row">
                                    <button
                                        class="rounded-lg border p-2 m-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 flex justify-center"
                                        onClick={handleUpload}
                                    >
                                        Upload
                                    </button>
                                    <button
                                        class="rounded-lg border p-2 m-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 flex justify-center"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                {loading && <Loader />}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageUpload;
