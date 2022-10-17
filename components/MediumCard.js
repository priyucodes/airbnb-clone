import Image from 'next/image'

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      {/* Next Image is absolutely positioned to its parent container, so to fill the image to its container container need to be relatively positioned and height and widht set so the image can occupy/fill the space. */}
      <div className="relative h-80 w-80">
        <Image src={img} alt={title} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}
export default MediumCard
