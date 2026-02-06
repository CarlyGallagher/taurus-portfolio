import Image from 'next/image';
import Navbar from './Navbar';
import { headerText } from '@/constants/data';

export default function Header() {
  return (
    <div id="header" className="relative h-[50vh] w-full">
      {/* Background Image */}
      <Image
        src="/images/sistine.jpg"
        alt="Header background"
        fill
        priority
        className="object-cover"
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3AD//2Q=="
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />

        {/* Header Text */}
        <div className="flex-1 flex items-center px-6 md:px-12">
          <div className="header-text flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl text-white bg-black/60 px-4 py-2 inline-block shadow-lg">
              {headerText.title}
            </h1>
            <h3 className="text-2xl md:text-3xl text-white bg-black/60 px-4 py-2 inline-block shadow-lg">
              {headerText.subtitle}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
