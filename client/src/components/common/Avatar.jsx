import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa"
import ContextMenu from "./ContextMenu";
import PhotoPicker from "./PhotoPicker";
import PhotoLibrary from "./PhotoLibrary";
import CapturePhoto from "./CapturePhoto";
function Avatar(props) {
  const {type, image, setImage} = props;
  const [hover, setHover] = useState(false)
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false)
  const [contextMenuCordinates, setContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  })
  const [grapPhoto, setGrabPhoto] = useState(false) //chọn ảnh từ máy
  const [showPhotoLibrary, setShowPhotoLibrary] = useState(false)// chọn ảnh từ thư viện
  const [showCapturePhoto, setShowCapturePhoto] = useState(false)// tự chụp ảnh
  const showContextMenu = (e) => {
    e.preventDefault()
    setContextMenuCordinates({ x: e.pageX, y: e.pageY })
    setIsContextMenuVisible(true)
  }
  const contextMenuOptions = [
    {name: "Chụp ảnh", callback:() => {
      setShowCapturePhoto(true)
    }},
    {name: "Chọn ảnh từ thử viện", callback:() => {
      setShowPhotoLibrary(true)
    }},
    {name: "Tải ảnh từ máy", callback:() => {
      setGrabPhoto(true)
    }},
    {name: "Xóa ảnh", callback:() => {
      setImage("/default_avatar.png")
    }}
  ]
  useEffect(() =>{
    if(grapPhoto){
      const data = document.getElementById("photo-picker")
      data.click()
      document.body.onfocus = (e) => {
        setTimeout(() => {
          setGrabPhoto(false)
        },1000)
      }
    }
  },[grapPhoto]) 
  const photoPickerChange = async (e) =>{
    const file = e.target.files[0]
    const reader = new FileReader()
    const data = document.createElement("img")
    reader.onload = function (event){
      data.src = event.target.result
      data.setAttribute("data-src", event.target.result)
    }
    reader.readAsDataURL(file)
    setTimeout(() => {
      setImage(data.src)
    }, 100)
  }
  return (
    <>
      <div className="flex items-center justify-center">
          { type === "sm" && (
            <div className="relative h-10 w-10">
              <Image 
                src={image} 
                alt="avatar"
                className="rounded-full"
                fill
              />  
            </div>
          )}
          { type === "lg" && (
            <div className="relative h-14 w-14">
              <Image 
                src={image} 
                alt="avatar"
                className="rounded-full"
                fill
              />  
            </div>
          )}
          { type === "xl" && (
            <div 
              className="relative cursor-pointer z-0"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className={`
                z-10
                bg-photopicker-overlay-background 
                h-60 w-60 
                absolute 
                top-0 
                left-0 
                flex 
                items-center 
                rounded-full 
                justify-center 
                flex-col 
                text-center 
                gap-2
                ${hover ? 'visible' : 'hidden'}
                `}
                onClick={(e) => showContextMenu(e)}
                id="context-opener"
                >
                  <FaCamera 
                  className="text-2xl"
                  id="context-opener"
                  onClick={(e) => showContextMenu(e)}
                  />
                  <span
                    onClick={(e) => showContextMenu(e)}
                    id="context-opener"
                  >
                    Thay ảnh đại diện
                  </span>
                </div>
              <div className="h-60 w-60 flex items-center justify-center">
                <Image 
                  src={image} 
                  alt="avatar"
                  className="rounded-full"
                  fill
                />  
              </div>
            </div>
          )}
      </div>
      {
        isContextMenuVisible && 
        <ContextMenu 
          options={contextMenuOptions}
          cordinates={contextMenuCordinates}
          contextMenu={isContextMenuVisible}
          setContextMenu={setIsContextMenuVisible}
        />
      }
      {
        showCapturePhoto && 
        <CapturePhoto 
          setImage={setImage}
          hideCapturePhoto={setShowCapturePhoto}
        />
      }
      {
        showPhotoLibrary && 
        <PhotoLibrary 
          setImage={setImage} 
          hidePhotoLibrary={setShowPhotoLibrary}
        />
      }
      {grapPhoto && <PhotoPicker onChange={photoPickerChange} />}
    </>
  )
}

export default Avatar;
