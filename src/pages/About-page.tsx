import QueryEditor from '../components/QueryEditor/QueryEditor';
import DeveloperCard from '../components/DeveloperCard/DeveloperCard';
import avatar1 from '../assets/images/Avatar_1.jpg';
import avatar2 from '../assets/images/Avatar_2.jpg';
import avatar3 from '../assets/images/Avatar_3.jpg';
import React from 'react';
import { useLocalization } from '../context/localization-context';

export function AboutPage() {
  const { translate } = useLocalization();
  return (
    <div className="flex flex-col sm:flex-row w-[90vw] sm:w-[93vw] md:w-[95vw] -mx-5 max-w-screen-xl rounded-md p-2 bg-light">
      <section className="py-7">
        <h2 className="text-2xl font-semibold py-4">{translate.team.text}</h2>
        <div className="flex justify-evenly xl:justify-between flex-wrap gap-5">
          <DeveloperCard
            name={translate.team.Roman}
            avatarLink={avatar1}
            description={translate.team.RomanDesc}
            url="https://github.com/gemer31"
            text="gemer31"
          ></DeveloperCard>
          <DeveloperCard
            name={translate.team.Kristina}
            avatarLink={avatar2}
            description={translate.team.KristinaDesc}
            url="https://github.com/crystal-twinkle"
            text="crystal-twinkle"
          ></DeveloperCard>
          <DeveloperCard
            name={translate.team.Sergey}
            avatarLink={avatar3}
            description={translate.team.SergeyDesc}
            url="https://github.com/SadJoeBright"
            text="SadJoeBright"
          ></DeveloperCard>
        </div>
      </section>
    </div>
  );
}
