import React from 'react'
import BlogPost from './BlogPost'

const HomePage = () => {

    const posts = [
        {
        img: "https://edgecast-img.yahoo.net/mysterio/api/0F8C8371339AC353585A35F4EAC4603EE80AAA72437B1CB5550AF2C7693BC335/autoblog/resizefill_w800_h450;quality_80;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2023/08/17145558/koenigsegg_jesko_absolut_fastest-car-in-the-world-2023.jpg",
        title: "The fastest car in the world is: Koenigsegg Jesko Absolut (330 MPH)", 
        author: "jakov.mi" ,
        desc:"That title goes to the Koenigsegg Jesko Absolut, which recorded a staggering 330 mph top speed earlier in 2023. The car’s twin-turbocharged 5.0-liter V8 lays down 1,600 horsepower and 1,106 pound-feet of torque, which plays a significant role in delivering that speed, but Koenigsegg’s engineers have given the car a lot more than mind-blowing power."
      },
      {
        img: "https://edgecast-img.yahoo.net/mysterio/api/AEBCA8432FBC342985408ED185421925BC32441A93CBDCE50E3D492FBFF50815/autoblog/resizefill_w800_h450;quality_80;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2023/08/17145801/BUGATTI_Bolide-300-mph.jpg",
        title: "The Bugatti Bolide sees 1,847 horsepower and 1,365 pound-feet of torque from a quad-turbo 8.0-liter W16", 
        author: "nonmi" ,
        desc:"However, unlike the Koenigsegg, the Bugatti is a track-only affair. Though it shares an engine and some of its underlying structure with the road-legal Chiron, Bugatti opted to keep the Bolide limited to track duty. While that’s a bummer, especially at the roughly $4.4 million price tag, not having to build a car to meet road car regulations gave Bugatti the freedom to create a brutal car with speed that defies logic. The Bolide is also far more exclusive than the Koenigsegg, as Bugatti produced just 40 of the extreme cars."
      },
      {
        img: "https://cdn.motor1.com/images/mgl/ZnMPMZ/s4/koenigsegg-agera-r.webp",
        title: "Koenigsegg Agera R", 
        author: "jakov.mi" ,
        desc:"The base Agera was already ridiculously quick out of the box. But the Agera R upped the ante with a twin-turbo 5.0-liter V8 engine good for 947 hp and 811 lb-ft of torque, which helped propel it to 62 mph in just 2.8 seconds and on to its 249 mph top speed. And it’s not even the fastest Agera variant on this list…"
      },
      {
        img: "https://edgecast-img.yahoo.net/mysterio/api/0F8C8371339AC353585A35F4EAC4603EE80AAA72437B1CB5550AF2C7693BC335/autoblog/resizefill_w800_h450;quality_80;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2023/08/17145558/koenigsegg_jesko_absolut_fastest-car-in-the-world-2023.jpg",
        title: "The fastest car in the world is: Koenigsegg Jesko Absolut (330 MPH)", 
        author: "jakov.mi" ,
        desc:"That title goes to the Koenigsegg Jesko Absolut, which recorded a staggering 330 mph top speed earlier in 2023. The car’s twin-turbocharged 5.0-liter V8 lays down 1,600 horsepower and 1,106 pound-feet of torque, which plays a significant role in delivering that speed, but Koenigsegg’s engineers have given the car a lot more than mind-blowing power."
      },
      
      ]


  return (
    <>
    {posts.map((post)=>(
      <BlogPost img={post.img} title={post.title} author={post.author} desc={post.desc} />
    ))}       
  </>
  )
}

export default HomePage
