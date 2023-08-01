import React, { useEffect, useRef } from 'react';
import { OverlayScrollbarsComponent, OverlayScrollbarsComponentRef } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';

const TextContainer = () => {
  const targetPara = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<OverlayScrollbarsComponentRef>(null);

  useEffect(() => {
    console.log(`targetPara:`, targetPara);
    console.log(`scrollRef:`, scrollRef);
  }, [targetPara, scrollRef]);

  const handleClick = () => {
    console.log(`click:`, targetPara);
    if (targetPara?.current) {
      targetPara.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <div className='w-64'>
        <OverlayScrollbarsComponent
          element="div"
          options={{ scrollbars: { autoHide: 'scroll' } }}
          events={{ scroll: () => { /* ... */ } }}
          defer
          className="h-64 overflow-auto"
          ref={scrollRef}
        >
          <p>Esse velit sint Lorem id non laboris elit non Lorem sint ut ut culpa aliqua. Laborum consectetur aliquip laboris esse occaecat occaecat minim dolor sit et ad velit mollit. Qui eu qui enim elit ut ut non. Magna ipsum mollit cupidatat laboris ex ex. Ut irure eiusmod cupidatat id est minim reprehenderit ex consectetur fugiat nulla enim. Ex tempor anim officia ullamco commodo incididunt do fugiat laborum nulla magna Lorem excepteur minim.Fugiat enim excepteur qui ullamco in voluptate amet labore dolore cupidatat. Culpa incididunt est labore irure incididunt. Velit aliqua incididunt sint elit deserunt aliquip. Ex cillum officia et sint ex. Cillum proident minim non irure. Ullamco eiusmod irure fugiat est irure Lorem nostrud tempor labore id irure irure proident. Do ipsum enim in aliquip in dolor est do minim aute.Ex adipisicing velit mollit tempor magna sit sunt aute. Voluptate eu ullamco deserunt laboris non magna ullamco nostrud excepteur ullamco. Laboris ut in exercitation pariatur laborum mollit est enim aliqua cillum. Velit anim consectetur velit nulla do excepteur consequat quis velit ex incididunt labore cillum. Pariatur exercitation dolore minim ex pariatur incididunt cupidatat tempor quis minim. Laboris exercitation laboris sunt do sit laborum laboris. Laborum cillum cillum adipisicing est. Esse sint ut anim labore duis esse cillum proident duis qui laboris minim ea. Ut Lorem esse aliqua ex qui deserunt non. Ullamco pariatur eiusmod nisi qui ullamco duis qui. Lorem aliqua proident in nostrud. Ad pariatur deserunt mollit fugiat exercitation consectetur deserunt fugiat laboris reprehenderit. In voluptate nisi aliqua aliquip anim. Incididunt incididunt pariatur quis non ex laboris laboris officia occaecat minim eiusmod cillum occaecat mollit. Enim ex qui enim culpa excepteur tempor eu elit. Dolor occaecat qui anim cillum elit est consectetur elit Lorem pariatur sit velit reprehenderit. Velit eu cupidatat ut dolor enim enim esse Lorem ullamco ad. Incididunt excepteur nisi tempor cillum id fugiat mollit sit ex commodo enim est. Lorem Lorem nisi aliqua irure qui deserunt est adipisicing mollit laboris enim enim.</p>
          <p className="targetPara text-red-600" ref={targetPara}>targetPara</p>
          <p>Mollit occaecat nulla deserunt minim dolor aliqua labore irure ullamco ad fugiat mollit officia ut. Veniam laborum ea pariatur et ut dolor et non occaecat aliqua esse ad cupidatat. Dolor consequat amet in qui. Minim excepteur minim cillum voluptate. Elit aliqua nisi ea magna. Culpa anim laborum ad cillum officia non. Ipsum anim consectetur consequat elit pariatur reprehenderit eiusmod cillum velit non pariatur. Ipsum nisi nulla culpa dolore ea qui cillum veniam ex. Sunt deserunt nulla voluptate exercitation eiusmod consectetur Lorem. Deserunt amet excepteur amet id ex non in cillum magna sit est ad ex ad. Non in aliquip exercitation nisi deserunt. Incididunt Lorem anim ullamco minim laborum velit dolor voluptate eu minim mollit eu sint duis. Proident officia elit laborum proident nostrud esse adipisicing irure Lorem consectetur dolor ipsum esse culpa. Velit excepteur sint in mollit ex deserunt dolore deserunt officia mollit mollit. Elit ad esse quis ipsum eiusmod velit culpa nisi culpa sunt.</p>
        </OverlayScrollbarsComponent>
      </div>
      <button onClick={handleClick}>scrollIntoView</button>
    </>
  );
};

export default TextContainer;
