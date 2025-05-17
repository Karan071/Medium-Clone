// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { REACT_APP_QUOTE_API_KEY } from "@/config";


export default function Quote() {
    // const [quote, setQuote] = useState<{ quote: string; author: string; } | null>(null);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchQuote = async (retryCount = 0) => {
    //         try {
    //             setIsLoading(true);
    //             const { data } = await axios.get<{ quote: string; author: string; }[]>(
    //                 'https://api.api-ninjas.com/v1/quotes',
    //                 {
    //                     headers: {
    //                         'X-Api-Key': REACT_APP_QUOTE_API_KEY || "",
    //                     },
    //                     timeout: 5000 // Add timeout
    //                 }
    //             );

    //             if (data && data.length > 0) {
    //                 setQuote(data[0]);
    //             } else {
    //                 throw new Error('No quotes available');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching quote:', error);
    //             if (retryCount < 2) {
    //                 // Retry up to 2 times
    //                 await new Promise(resolve => setTimeout(resolve, 1000));
    //                 return fetchQuote(retryCount + 1);
    //             }
    //             // Fallback quote if API fails
    //             setQuote({
    //                 quote: "The customer service I received was exceptional. The support team went above and beyond to address my concerns.",
    //                 author: "Julius Winfiled"
    //             });
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchQuote();
    // }, []);
    

    // if (!quote) {
        return <div className="bg-slate-50 h-screen flex justify-center flex-col font-inter">
            <div className="flex justify-center">
                <div className="max-w-xl ">
                    <div className="font-semibold text-3xl">
                        <h1>&#10077; The customer service I recieved was expectional. Te support team went above and beyond to address my concerns ❞</h1>
                    </div>
                    <div className="max-w-md  text-xl font-semibold mt-5">
                        Julius Winfiled
                    </div>
                    <div className="max-w-md  text-md font-light text-slate-600">
                        CEO | Acme corps
                    </div>
                </div>
            </div>
        </div>;
    }

    // return <div className="bg-slate-50 h-screen flex justify-center flex-col font-inter">
    //     <div className="flex justify-center">
    //         <div className="max-w-xl ">
    //             <div className="font-semibold text-3xl">
    //                 <h1>&#10077; {quote.quote}❞</h1>
    //             </div>
    //             <div className="max-w-md  text-xl font-semibold mt-5">
    //                 {quote.author}
    //             </div>
    //             <div className="max-w-md  text-md font-light text-slate-600">
    //                 CEO | Acme corps
    //             </div>
    //         </div>
    //     </div>

//     </div>
// } 