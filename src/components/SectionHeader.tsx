import React from 'react';

interface SectionHeaderProps {
  pillText: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ pillText, title }) => (
  <div className="flex flex-col items-center mb-12">
    <span
      className="inline-block bg-white text-[#292929] text-[16px] font-regular uppercase px-5 py-2 rounded-[8px] border border-[#E4E4E7] mb-4 tracking-wider"
      style={{ letterSpacing: 1 }}
    >
      {pillText}
    </span>
    <h2 className="text-[40px] font-semibold text-[#292929] mt-0 text-center">{title}</h2>
  </div>
);

export default SectionHeader; 