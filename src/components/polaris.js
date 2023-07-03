import React, { useEffect } from 'react';
import '../styling/polaris.scss';
import ProjectTitle from './ProjectTitle';

const Polaris = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="portfolioFlex">
      <ProjectTitle
        name="Polaris"
        timeline="2 weeks"
        purpose="As the final project for COSC 25.01 at Dartmouth, tackling the mental health topic. In the age of Zoom, college
         students have placed a pause on their mental health. Polaris aims to provide incentive to acheive personal goals, motivational quotes, as well as a journaling self-reflection component."
        color="purpleText"
        team={(
          <p>Maia Ward - Designer  <br />
            William Perez - Designer <br />
            Carson Levine  - Design Mentor <br />
            Kim Mamers - Design Mentor
          </p>
                )}
        tag1="Mobile"
        tag2="Wellness"
        tag3="Tracking"
        tag4="Journal"
        tag5="Goal"
        tagStyling="polarisTag"

      />
    </div>

  );
};
export default Polaris;
