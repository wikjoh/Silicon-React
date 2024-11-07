import { useEffect, useState } from "react"
import FAQItem from "./FAQItem";


const FAQ = () => {
  const [faqItems, setFaqItems] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
      if (!res.ok) throw new Error("Response not OK");
      
      const data = await res.json();
      setFaqItems(data)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="faq-accordion">
      {
        faqItems.map((item) => (<FAQItem key={item.id} title={item.title} content={item.content} />))
      }
    </div>
  )
}
export default FAQ