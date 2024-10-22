import { useAuth } from "../../../Hook/useAuth"
import { useUserInfo } from "../../../Hook/useUserInfo"
import { Banner } from "../Banner/Banner"
import { Feature } from "../Feature/Feature"
import { NewsLetter } from "../NewsLetter/NewsLetter"
import { PersonalizedRecommendation } from "../PersonalizedRecommendation/PersonalizedRecommendation"
import { Promotion } from "../Promotion/Promotion"
import { Terms } from "../Terms/Terms"
import { Testimonial } from "../Testimonial/Testimonial"


export const Home = () => {
  const {user} = useAuth()
  const {data} = useUserInfo()
  return (
    <div>
     <Banner />
    { user && data?.status === "active" && <Feature />}
     <Promotion />
     <PersonalizedRecommendation />
     <Testimonial />
     <Terms />
     <NewsLetter />
    </div>
  )
}
