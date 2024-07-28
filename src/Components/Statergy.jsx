import React, { useRef, useState } from "react";
import Fo3 from "./Footer/Fo3";

function Statergy() {
const [third , setthird] = useState(["Strategy"])

   const genius = useRef()

  const [state, setstate] = useState({title: "Strategy",
    date: `We believe that a well-crafted strategy is the cornerstone of
            business success. Our expert consultants collaborate closely with
            you to develop strategies that align with your vision, harness
            your strengths, and navigate challenges. We delve into market
            analysis, competitive positioning, and innovative thinking to
            create actionable plans that drive growth and sustainability.
            Whether it's corporate strategy, functional optimization, or
            market entry, we tailor our approach to meet your unique needs.
            Partner with Aweganyz to transform your strategic vision into
            reality, unlocking new opportunities and achieving lasting impact.
            Together, we'll chart a course for a prosperous future.`,
    three: "Core Business Strategies",
    four: `At Aweganyz, our Core Business Strategies are designed to align
            your vision, optimize functionality, and streamline operations. We
            delve into corporate strategy to establish a robust foundation,
            ensuring every function within your organization drives towards
            shared goals. Our operational strategies fine-tune processes for
            maximum efficiency and effectiveness. From strategic formulation
            to implementation, we craft actionable plans that deliver
            measurable results. Partner with us to create a cohesive roadmap
            that transforms potential into performance, empowering your
            business to thrive in a competitive landscape.`,
    five: "Features",
    // fone : "Features",
    ftwo: "- Corporate Strategy",
    fthree: "- Functional Strategy",
    ffour: "- Operational Strategy",
    ffive: "- Strategic Formulation",
    fsix: "- Strategic Implementation",
    six: "Growth and Market Strategies",
    seven: `Aweganyz excels in Growth and Market Strategies, propelling your
            business towards unprecedented expansion. We identify and leverage
            growth opportunities through comprehensive market analysis and
            innovative strategies. Whether it's through mergers, acquisitions,
            or strategic diversification, our tailored solutions ensure you
            capture new markets and enhance your competitive edge. Our
            combination strategies integrate diverse growth tactics,
            optimizing your market presence. Trust Aweganyz to fuel your
            growth journey, turning ambitious goals into sustainable success.`,
    eone: "- Growth Strategy",
    etwo: "- Competitive Strategy",
    ethree: "- Acquisition Strategy",
    efour: "- Diversification Strategy",
    efive: "- Combination Strategy",

    nine: "Niche and Defensive Strategies",
    ten: `At Aweganyz, we understand that sometimes the best offense is a
            strong defense. Our Niche and Defensive Strategies are tailored to
            secure and strengthen your market position. We employ focus
            strategies to dominate specific market segments, ensuring you
            become the go-to provider for targeted customer bases.
            Retrenchment and turnaround strategies are expertly crafted to
            stabilize and rejuvenate struggling operations, transforming
            challenges into opportunities. With pause strategies, we help you
            regroup and strategize during market uncertainties. Let Aweganyz
            fortify your business, turning vulnerabilities into victories.`,
    tone: "- Focus Strategy",
    ttwo: "- Retrenchment Strategy",
    tthree: "- Turnaround Strategiesy",
    tfour: "- Pause Strategy",

    eleven: "Analytical and Objective-Setting Strategies",
    twell: `Aweganyz specializes in Analytical and Objective-Setting
            Strategies that provide a clear, data-driven path to success. We
            conduct thorough strategic objectives and analysis to align your
            business goals with actionable insights. Our derivative strategies
            are crafted to respond dynamically to market shifts, ensuring you
            stay ahead of trends and competitors. By setting precise,
            measurable objectives, we drive focused progress and continuous
            improvement. Partner with Aweganyz to transform data into
            strategic advantage, empowering informed decision-making and
            sustainable growth.`,
    twone: "- Strategic Objectives and Analysis",
    twtwo: "- Derivative Strategy",

    thirteen: "Transformational and Popular Strategies",
    fouteen: `Embrace the future with Aweganyz's Transformational and Popular
            Strategies. We guide your organization through transformative
            change, leveraging cutting-edge methodologies to innovate and
            adapt. Our popular strategies incorporate best practices and
            industry trends, ensuring your business remains at the forefront
            of its field. Whether through digital transformation, cultural
            change, or leadership development, we provide the tools and
            expertise to redefine what's possible. Join Aweganyz on a journey
            of transformation, where visionary strategies meet real-world
            results.`,
    fifteen: "- Transformational Strategy",
    sixteen: "- Popular Articles",

    third: "Cost and Pricing Strategies",
    thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leadership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
    thirdtwo: "-  Cost Leadership Strategy",
    thirdthree: "-  Price Skimming Strategy",});
  // console.log(state);
  const datas = [
    {
      title: "Strategy",
      date: `We believe that a well-crafted strategy is the cornerstone of
              business success. Our expert consultants collaborate closely with
              you to develop strategies that align with your vision, harness
              your strengths, and navigate challenges. We delve into market
              analysis, competitive positioning, and innovative thinking to
              create actionable plans that drive growth and sustainability.
              Whether it's corporate strategy, functional optimization, or
              market entry, we tailor our approach to meet your unique needs.
              Partner with Aweganyz to transform your strategic vision into
              reality, unlocking new opportunities and achieving lasting impact.
              Together, we'll chart a course for a prosperous future.`,
      three: "Core Business Strategies",
      four: `At Aweganyz, our Core Business Strategies are designed to align
              your vision, optimize functionality, and streamline operations. We
              delve into corporate strategy to establish a robust foundation,
              ensuring every function within your organization drives towards
              shared goals. Our operational strategies fine-tune processes for
              maximum efficiency and effectiveness. From strategic formulation
              to implementation, we craft actionable plans that deliver
              measurable results. Partner with us to create a cohesive roadmap
              that transforms potential into performance, empowering your
              business to thrive in a competitive landscape.`,
      five: "Features",
      // fone : "Features",
      ftwo: "- Corporate Strategy",
      fthree: "- Functional Strategy",
      ffour: "- Operational Strategy",
      ffive: "- Strategic Formulation",
      fsix: "- Strategic Implementation",
      six: "Growth and Market Strategies",
      seven: `Aweganyz excels in Growth and Market Strategies, propelling your
              business towards unprecedented expansion. We identify and leverage
              growth opportunities through comprehensive market analysis and
              innovative strategies. Whether it's through mergers, acquisitions,
              or strategic diversification, our tailored solutions ensure you
              capture new markets and enhance your competitive edge. Our
              combination strategies integrate diverse growth tactics,
              optimizing your market presence. Trust Aweganyz to fuel your
              growth journey, turning ambitious goals into sustainable success.`,
      eone: "- Growth Strategy",
      etwo: "- Competitive Strategy",
      ethree: "- Acquisition Strategy",
      efour: "- Diversification Strategy",
      efive: "- Combination Strategy",

      nine: "Niche and Defensive Strategies",
      ten: `At Aweganyz, we understand that sometimes the best offense is a
              strong defense. Our Niche and Defensive Strategies are tailored to
              secure and strengthen your market position. We employ focus
              strategies to dominate specific market segments, ensuring you
              become the go-to provider for targeted customer bases.
              Retrenchment and turnaround strategies are expertly crafted to
              stabilize and rejuvenate struggling operations, transforming
              challenges into opportunities. With pause strategies, we help you
              regroup and strategize during market uncertainties. Let Aweganyz
              fortify your business, turning vulnerabilities into victories.`,
      tone: "- Focus Strategy",
      ttwo: "- Retrenchment Strategy",
      tthree: "- Turnaround Strategiesy",
      tfour: "- Pause Strategy",

      eleven: "Analytical and Objective-Setting Strategies",
      twell: `Aweganyz specializes in Analytical and Objective-Setting
              Strategies that provide a clear, data-driven path to success. We
              conduct thorough strategic objectives and analysis to align your
              business goals with actionable insights. Our derivative strategies
              are crafted to respond dynamically to market shifts, ensuring you
              stay ahead of trends and competitors. By setting precise,
              measurable objectives, we drive focused progress and continuous
              improvement. Partner with Aweganyz to transform data into
              strategic advantage, empowering informed decision-making and
              sustainable growth.`,
      twone: "- Strategic Objectives and Analysis",
      twtwo: "- Derivative Strategy",

      thirteen: "Transformational and Popular Strategies",
      fouteen: `Embrace the future with Aweganyz's Transformational and Popular
              Strategies. We guide your organization through transformative
              change, leveraging cutting-edge methodologies to innovate and
              adapt. Our popular strategies incorporate best practices and
              industry trends, ensuring your business remains at the forefront
              of its field. Whether through digital transformation, cultural
              change, or leadership development, we provide the tools and
              expertise to redefine what's possible. Join Aweganyz on a journey
              of transformation, where visionary strategies meet real-world
              results.`,
      fifteen: "- Transformational Strategy",
      sixteen: "- Popular Articles",

      third: "Cost and Pricing Strategies",
      thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leaership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
     
    },
    {
      title: "Product Design",
      date: `We believe that a well-crafted strategy is the cornerstone of business success. Our expert consultants collaborate closely with you to develop strategies that align with your vision, harness your strengths, and navigate challenges. We delve into market analysis, competitive positioning, and innovative thinking to create actionable plans that drive growth and sustainability. Whether it's corporate strategy, functional optimization, or market entry, we tailor our approach to meet your unique needs. Partner with Aweganyz to transform your strategic vision into reality, unlocking new opportunities and achieving lasting impact. Together, we'll chart a course for a prosperous future.`,
      three: "Original Product Design",
      four: `We transform visionary ideas into tangible realities. Our Original Product Design service is a testament to innovation and creativity. We collaborate closely with clients to understand their unique needs, ensuring every concept is meticulously crafted from the ground up. Our design process blends artistic inspiration with cutting-edge technology, resulting in products that not only meet market demands but also set new industry standards.`,
      // five: "Features",
      // fone : "Features",
      // ftwo: "- Corporate Strategy",
      // fthree: "- Functional Strategy",
      // ffour: "- Operational Strategy",
      // ffive: "- Strategic Formulation",
      // fsix: "- Strategic Implementation",
      six: "System Design",
      seven: `Our solutions streamline operations and enhance efficiency. We analyze your existing infrastructure, identifying key areas for improvement and integration. We develop robust, scalable systems tailored to your specific requirements, ensuring seamless functionality and optimal performance. From software architecture to complex network configurations, our designs are engineered to support your business growth and agility.`,
     

      nine: "Adaptive Product Design",
      ten: `In a constantly evolving market, adaptability is key. our service ensures your products remain relevant and competitive. We design flexible solutions that can easily adjust to changing user needs and technological advancements. By incorporating modular components and forward-thinking strategies, our designs provide longevity and resilience. We will work closely with you to anticipate future trends, ensuring your products stay ahead of the curve.`,
      

      eleven: "Engineering Design/Variant Design",
      twell: `We collaborate to create innovative solutions tailored to your specific needs. Whether developing new products or enhancing existing ones, we ensure each variant meets the highest standards of quality and functionality. Our meticulous attention to detail and commitment to precision engineering guarantee reliable, efficient, and market-ready designs.`,
   

      thirteen: "Interface Design",
      fouteen: `We understand that a user-friendly interface is crucial for product success. We focus on creating intuitive and engaging user experiences. We combine aesthetic appeal with functional excellence, ensuring every interaction is smooth and satisfying. We employ latest design principles and user research to craft interfaces that are not only visually stunning but also easy to navigate.`,
   
      nine: "Interface Design",
      sixteen: `We understand that a user-friendly interface is crucial for product success. We focus on creating intuitive and engaging user experiences. We combine aesthetic appeal with functional excellence, ensuring every interaction is smooth and satisfying. We employ latest design principles and user research to craft interfaces that are not only visually stunning but also easy to navigate.`,
     
    },
    {
      title: "Transformation",
   
      three: "Business Process Transformation",
      four: `We redefine operational efficiency by meticulously analyzing existing workflows to identify inefficiencies and streamline processes, ensuring optimal performance. Our tailored strategies integrate cutting-edge technologies with industry best practices, driving productivity and innovation.`,
    
      six: "Organisational Transformation",
      seven: `We guide companies through change with strategic vision and empathetic leadership. We align structures, cultures, and operations with your strategic goals, fostering a resilient and adaptive organization. Our approach ensures seamless transitions, enhancing collaboration and driving sustained growth.`,
  

      nine: "Management Transformation",
      ten: `Our service equips your leaders with the skills and strategies necessary for modern challenges. We refine leadership practices, enhance decision-making processes, and foster a culture of continuous improvement. Our expert guidance ensures your management team is agile, innovative, and aligned with your business objectives.`,
   

      eleven: "Cultural Transformation",
      twell: `We focus on creating a cohesive, dynamic workplace culture that drives engagement and performance. We work closely with your team to identify and nurture core values, fostering an inclusive environment that embraces change. Our strategies cultivate a culture of innovation, collaboration, and resilience, positioning your organization for sustained success.`,
     

      thirteen: "Information Systems Transformation",
      fouteen: `We help you in modernizing your IT infrastructure to meet contemporary demands. We implement scalable, secure, and efficient systems that enhance data management and operational performance. Our solutions integrate seamlessly with your business processes, driving technological advancement and competitive advantage.`,
     
      third: "Business Model Transformation",
      thirdone: `Our service reimagines your value creation strategies. We analyze market trends and competitive landscapes to develop innovative business models that drive revenue and growth. Our approach aligns with your strategic vision, ensuring sustainable success.`,
      
    },
    {
      title: "Digital, Technology & Data",
     
      three: "Infrastructure & Cloud",
      four: `We provide robust, scalable solutions that optimize your IT environment. We design and implement cutting-edge cloud infrastructures that enhance agility, reduce costs, and improve operational efficiency. Our expert team ensures seamless integration and migration, offering continuous support and management. By leveraging the latest technologies, we enable your organization to rapidly adapt to changing business demands`,

      six: "Enterprise Architecture & Digital Platforms",
      seven: `We masterfully drive business innovation and strategic alignment. Our comprehensive approach encompasses the design and implementation of cohesive digital frameworks, ensuring seamless integration across all business functions. We focus on optimizing technology ecosystems to enhance performance and scalability, enabling your organization to respond swiftly to market changes. By leveraging cutting-edge digital platforms, we facilitate improved decision-making and operational efficiency.`,
  
      nine: "Cybersecurity",
      ten: `We safeguard your critical assets and data against evolving threats. Our proactive approach involves comprehensive risk assessments, robust security frameworks, and continuous monitoring to ensure your organization remains protected. We implement advanced security measures, including threat detection, incident response, and compliance management, tailored to your specific needs. Our dedicated team of experts stays ahead of the curve, adapting to new challenges and vulnerabilities. `,
  

      eleven: "Agile Delivery",
      twell: `We transform your project management approach to enhance flexibility and efficiency. Our agile methodologies promote iterative development, continuous feedback, and rapid adaptation to change, ensuring timely and successful project outcomes. We foster a collaborative environment where cross-functional teams work seamlessly towards common goals. By integrating agile principles, we enhance productivity, reduce risks, and accelerate time-to-market for your products and services.`,
  

      thirteen: "Technology Sourcing",
      fouteen: `We provide strategic guidance to procure the best technologies for your business needs. Our comprehensive approach involves analyzing your requirements, evaluating market options, and negotiating with vendors to secure optimal solutions. We ensure alignment with your strategic goals, focusing on cost-effectiveness, quality, and scalability. Our expert team handles everything from initial assessment to implementation and ongoing support, ensuring seamless integration and maximum value. `,
      fifteen: "- Transformational Strategy",
      sixteen: "- Popular Articles",

      third: "Cost and Pricing Strategies",
      thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leadership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
   
    },
    {
      title: "People and Organisation",
   
      three: "People and Organisation",
      four: `We believe that a vibrant culture and adept change management are pivotal for organizational success. Our Culture & Change services foster a resilient, adaptive environment where employees thrive. We collaborate with you to understand your unique culture, implementing strategies that promote engagement and seamless transitions during times of change. Through workshops, communication plans, and leadership alignment, we ensure that your organizational culture evolves positively, driving sustained growth and innovation.`,

      six: "Diversity, Equity & Inclusion",
      seven: `We masterfully drive business innovation and strategic alignment. Our comprehensive approach encompasses the design and implementation of cohesive digital frameworks, ensuring seamless integration across all business functions. We focus on optimizing technology ecosystems to enhance performance and scalability, enabling your organization to respond swiftly to market changes. By leveraging cutting-edge digital platforms, we facilitate improved decision-making and operational efficiency.`,
    

      nine: "Enterprise Agility",
      ten: `Our services transform your organization into a nimble, responsive powerhouse. We implement agile frameworks that enhance flexibility, streamline processes, and accelerate innovation. Our approach includes training, coaching, and continuous improvement initiatives, ensuring your teams can swiftly adapt to market changes. By fostering a culture of agility, we enable your organization to deliver value faster and more efficiently.`,
      

      eleven: "Leadership",
      twell: `We empower your executives to inspire and lead with vision and impact. We offer bespoke leadership development programs, combining coaching, workshops, and experiential learning to enhance leadership capabilities. Our approach focuses on strategic thinking, emotional intelligence, and effective decision-making, ensuring your leaders are equipped to navigate complexities and drive transformation.`,
     

      thirteen: "M&A",
      fouteen: `We guide organizations through the complexities of Mergers & Acquisitions (M&A). Our M&A services encompass due diligence, integration planning, and change management, ensuring smooth transitions and value realization. We align cultures, streamline operations, and mitigate risks, fostering synergy and growth. By leveraging our expertise, you can confidently navigate the M&A landscape, achieving strategic objectives and maximizing shareholder value.`,
   

      third: "Cost and Pricing Strategies",
      thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leadership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
    
    },
    {
      title: "Operations",
    
      three: "Capital Excellences",
      four: `We optimise your investments to maximize returns and drive growth. Our experts analyze your capital allocation, uncovering inefficiencies and opportunities for enhancement. We implement robust governance frameworks, project management practices, and performance tracking systems to ensure your capital projects deliver value on time and within budget. By aligning your investment strategy with business objectives, we help you achieve sustainable financial performance and competitive advantage.`,
      
      six: "Manufacturing & Supply Chain",
      seven: `We help in streamlining your production and distribution processes for peak efficiency and reliability. We employ advanced analytics and lean principles to optimize your supply chain, reducing costs and improving agility. Our approach includes end-to-end assessments, demand forecasting, inventory management, and supplier collaboration, ensuring seamless operations and high-quality output. By enhancing your manufacturing capabilities and supply chain resilience, we enable you to meet market demands swiftly and effectively.`,
   

      nine: "Product Development & Procurement",
      ten: `We ensure your products are innovative, high-quality, and cost-effective by guiding you through the entire product lifecycle, from ideation to market launch, employing agile methodologies to accelerate development and minimize risk. Our procurement strategies focus on supplier optimization, cost reduction, and quality assurance, ensuring you source the best materials and services. By integrating development and procurement processes, we help you bring superior products to market faster and more efficiently.`,
   

      eleven: "Service Operations",
      twell: `We optimize your service delivery to enhance customer satisfaction and operational efficiency. We analyze your service processes, identifying bottlenecks and implementing improvements to streamline workflows and reduce costs. Our strategies include process reengineering, performance metrics, and employee training, ensuring consistent, high-quality service delivery. By leveraging technology and best practices, we help you exceed customer expectations and achieve operational excellence.`,
      

    },
    {
      title: "Growth, Marketing & Sales",
   
      three: "Branding",
      four: `At Aweganyz, we craft compelling brand identities that resonate and inspire. Our Branding services delve deep into your brand's essence, articulating your unique value proposition with precision and creativity. We develop cohesive brand strategies, including visual identity, messaging, and positioning, ensuring consistent and powerful brand expression across all touchpoints. By aligning your brand with your business goals and market trends, we help you build a strong, memorable presence that drives customer loyalty and competitive advantage.`,
     
      six: "Customer Experience",
      seven: `We transform every interaction into a memorable journey. We design and implement strategies that enhance each stage of the customer lifecycle, ensuring seamless and delightful experiences. Our approach combines customer insights, journey mapping, and service design to optimize touchpoints and exceed expectations. By leveraging the latest technologies and best practices, we create personalized, engaging experiences that foster loyalty and advocacy.`,
      

      nine: "Customer Lifecycle Management",
      ten: `We specialize in Customer Lifecycle Management, ensuring sustained engagement from acquisition to retention. We analyze customer behaviors and preferences to develop targeted strategies that nurture relationships and drive long-term loyalty. Our services include segmentation, personalized communication, and loyalty programs, tailored to maximize customer value at each stage. By implementing data-driven insights and innovative techniques, we help you optimize every phase of the customer journey.`,
    

      eleven: "Digital Marketing",
      twell: `We propel your online presence to new heights. We develop comprehensive digital strategies that integrate SEO, content marketing, social media, and paid advertising to reach and engage your target audience effectively. Our data-driven approach ensures precision targeting, maximizing ROI and driving measurable results. From campaign planning to execution and optimization, we focus on delivering impactful, personalized experiences that convert.`,
    

      thirteen: "Insights & Analytics",
      fouteen: `We unlock the potential of your data, providing actionable intelligence that drives strategic decisions. We utilize advanced analytics, data visualization, and predictive modeling to uncover trends, opportunities, and insights. Our approach ensures you have a clear, comprehensive understanding of your market, customers, and performance. By turning data into meaningful insights, we help you innovate and stay ahead of the competition.`,
     

    
     
    },
  ];

  const clikeddatas = (datas) => {
    setstate(datas);
  genius.current.classList.remove("ytfjg")

  };

const moilecontent = ()=>{
  genius.current.classList.toggle("ytfjg")
}

  return (
    <>
      <div className="statergy">
        <div className="stateryinner">

             <div className="mobilecintengyvhb">
              <div className="hgfytv"  onClick={()=>moilecontent()}>
              <input  value={state.title} readOnly />
              <img src="/images/down1.svg" />
              </div>

              <div className="miblkegvf"  ref={genius}>
              {datas.map((iteam) => {
                  let spanClass = third.includes(iteam.title) ? 'spanlist1' : 'fro1';

              return (
                <>
                  <div key={iteam.title} onClick={() => clikeddatas(iteam)}>
                    {/* <h1 className={spanClass}  onClick={(e)=>setthird(e.target.value)}>{}</h1> */}
           <input type='text' className={spanClass} value={iteam.title} onClick={(e)=>setthird(e.target.value)} readOnly />

                  </div>
                </>
              );
            })}
              </div>
             </div>

          <div className="innersta">
            {datas.map((iteam) => {
                  let spanClass = third.includes(iteam.title) ? 'spanlist' : 'fro';

              return (
                <>
                  <div key={iteam.title} onClick={() => clikeddatas(iteam)}>
                    {/* <h1 className={spanClass}  onClick={(e)=>setthird(e.target.value)}>{}</h1> */}
           <input type='text' className={spanClass} value={iteam.title} onClick={(e)=>setthird(e.target.value)} readOnly />

                    <hr />
                  </div>
                </>
              );
            })}
          </div>
          <div className="innerstatr">
            {/* {
              state.date
            } */}
            <h1 className="tyufgb">{state.title}</h1>
            <p>{state.date}</p>

            <h1 className="ytutgf">{state.three}</h1>
            <div className="likop1"></div>

            <p>{state.four}</p>
            <p className="five">{state.five}</p>
            <div>
              <p>{state.ftwo}</p>
              <p>{state.fthree}</p>
              <p>{state.ffour}</p>
              <p>{state.ffive}</p>
              <p>{state.fisix}</p>
            </div>

            <h1 className="ytutgf">{state.six}</h1>
            <div className="likop1"></div>

            <p>{state.seven}</p>
            <p className="five">{state.five}</p>
            <div>
              <p>{state.eone}</p>
              <p>{state.etwo}</p>
              <p>{state.ethree}</p>
              <p>{state.efour}</p>
              <p>{state.efive}</p>
            </div>

            <h1 className="ytutgf">{state.third}</h1>
            <div className="likop1"></div>

            <p>{state.thirdone}</p>

            <h1 className="ytutgf">{state.chan}</h1>
            <div className="likop1"></div>

            <p>{state.chanone}</p>

            <p className="five">{state.five}</p>
            <div>
              <p>{state.thirdtwo}</p>
              <p>{state.thirdthree}</p>
            </div>

            <h1 className="ytutgf">{state.nine}</h1>
            <div className="likop1"></div>

            <p>{state.ten}</p>
            <p className="five">{state.five}</p>
            <div>
              <p>{state.tone}</p>
              <p>{state.ttwo}</p>
              <p>{state.tthree}</p>
              <p>{state.tfour}</p>
            </div>

            <h1 className="ytutgf">{state.eleven}</h1>
            <div className="likop1"></div>

            <p>{state.twell}</p>
            <p className="five">{state.five}</p>
            <div>
              <p>{state.twone}</p>
              <p>{state.twtwo}</p>
            </div>

            <h1 className="ytutgf">{state.thirteen}</h1>
            <div className="likop1"></div>

            <p>{state.fouteen}</p>
            <p className="five">{state.five}</p>
            <div>
              <p>{state.fifteen}</p>
              <p>{state.sixteen}</p>
            </div>
          </div>
        </div>
      </div>
      <Fo3/>
    </>
  );
}

export default Statergy;