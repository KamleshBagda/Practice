import React from 'react'

function Movies_Data(props) {
    return (
        <>
            const movie= [
            {{
                title: "OMG2",
                desc: "OMG 2 is a 2023 Indian Hindi language satirical comedy- drama film directed by Amit Rai, starring Akshay Kumar, Pankaj Tripathi, and Yami Gautam.01 The film is a spiritual sequel to  OMG – Oh My God! (2012) and revolves around the subject of sex education in Indian schools.1 In a courtroom play, an unhappy civilian asks the court to mandate comprehensive education in schools.",
                image: "https://imgs.search.brave.com/W_66A18Gr1H7DLWHg0W0h4KFCleAdLP1aPuC_-c2YkM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/NS5ib2xseXdvb2Ro/dW5nYW1hLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA3/L09NRy0yLTEtMi0z/MjJ4Mzk5LmpwZw"
            }},

            {{
                title: "Gadar 2",
                desc: " Gadar 2 (transl. Rebellion 2) is a 2023 Indian Hindi-language period action drama film directed and produced by Anil Sharma, and written by Shaktimaan Talwar. A sequel to the 2001 film Gadar: Ek Prem Katha, the film stars Sunny Deol, Ameesha Patel and Utkarsh Sharma reprising their roles from ..",
                image: "https://imgs.search.brave.com/KybreexOBtUyoVThtUSsMqrpPXuyIrSBBOBdOgd39Do/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hd2Jp/Lm9yZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNS8wNDEz/LWdhZGFyLTItcG9z/dGVyLmpwZw"
            }},

            {{
                title: "MEG 2: THE TRENCH",
                desc: "Critics Consensus: It isn't without its fun moments, but Meg 2: The Trench suffers from a disjointed story that drifts for too long before finally delivering a few campy thrills Synopsis Get ready for the ultimate adrenaline rush this summer in Meg 2: The Trench, a literally larger-than-life thrill ride that... [More]",
            }},
            {{
                title: "TEENAGE MUTANT NINJA TURTLES: MUTANT MAYHEM",
                desc: "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers. Their new friend, April O'Neil, helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
                image: "https://imgs.search.brave.com/u1Sa7B9KpxqkxIaSJJJYUdlMe1zbGVtZor1IRybhXps/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdG9y/ZS1pbWFnZXMucy1t/aWNyb3NvZnQuY29t/L2ltYWdlL2FwcHMu/MjQwNjkuMTQzNzU1/OTIyNzEzMTM2MTgu/ODEwMWJkZmMtOTdl/OS00NzNmLThjYTAt/MDdmYzgzYjE4NDZi/LjNhODIzYjdiLTc2/YjgtNGFhMi1hNjlm/LWNmOWZlZDkzYWFi/OT93PTQwMCZoPTYw/MA"
            }},

            {{
                title: "OPPENHEIMER",
                desc: " Oppenheimer marks another engrossing achievement from Christopher Nolan that benefits from Murphy's tour-de-force performance and stunning visuals During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan...",
                image: "https://imgs.search.brave.com/ICkJnqwFNTej7x8ENWUdBod4xMJprXTxr-HL3-dWh8c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tb3Zp/ZXMudW5pdmVyc2Fs/cGljdHVyZXMuY29t/L21lZGlhL29wcGVu/aGVpbWVyLXBvc3Rl/ci01NjB4ODgwLTYz/OWEyNjhiMTI5OTkt/MS5qcGc"
            }},

            {{
                title: "COAT",
                desc: "Madho and his father are pig farmers, of a low caste are not respected by the other villagers. One day he sees a foreigner being respected and because of his expensive coat. Determined Madho tries to acquire a coat that he cannot afford.",
                image: "https://imgs.search.brave.com/nv9q1tlI0AQDiQmdG30jUW-4_Ncg6b7H5pAumAz5xwo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/NC5ib2xseXdvb2Ro/dW5nYW1hLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA0/L0NvYXQtMzIyeDQ3/NC5qcGc"
            }},
            {{
                title: "MISSION: IMPOSSIBLE - DEAD RECKONING, PART ONE",
                desc: "With world-threatening stakes and epic set pieces to match that massivetitle, Mission: Impossible - Dead Reckoning Part One proves this is still a franchise you should choose to accept",
                image: "https://imgs.search.brave.com/o-WLSQm1JFkcttZ9vAkTFBIKJRxy6lokgcv0huLwFZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L3N0YXRpYy5yb2dl/cmViZXJ0LmNvbS91/cGxvYWRzL21vdmll/L21vdmllX3Bvc3Rl/ci9taXNzaW9uLWlt/cG9zc2libGUtLS1k/ZWFkLXJlY2tvbmlu/Zy1wYXJ0LW9uZS0y/MDIzL2xhcmdlX21p/c3Npb24taW1wb3Nz/aWJsZS1kZWFkLXJl/Y2tvbmluZy1wYXJ0/LW9uZS1NSURSUDFf/RG9tXzIwMzd4MzAw/MF9QYXlvZmZfRGln/aXRhbF8xc2h0XzAx/X0ZpbjE4X3JnYi5q/cGc"
            }},

            {{
                title: "GHOOMER",
                desc: " Ghoomer: Directed by R. Balki. With Amitabh Bachchan, Shabana Azmi, Abhishek Bachchan, Saiyami Kher. Inspired by the incredible achievement of Karoly Takacs, follow the achievements of special athletes, and who have achieved more than when they were called normal.",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16965_ghoomer_cover.jpg"
            }},

            {{
                title: "NON STOP DHAMAAL",
                desc: "'Non Stop Dhamaal' is an upcoming Hindi movie directed by Irshad Khan, starring Annu Kapoor, Manoj Joshi, Rajpal Yadav, Asrani, Priyanshu Chatterjee, Rajesh Jais, Shreyas Talpade, and Kamlesh Sawan",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/17029_non-stop-dhamaal_cover.jpg"
            }},
            {{
                title: "DREAM GIRL 2",
                desc: " Dream Girl 2 is an upcoming Indian Hindi-language comedy-drama film directed by Raaj Shaandilyaa and produced by Ekta Kapoor and Shobha Kapoor under Balaji Motion Pictures. The film is a spiritual sequel to the 2019 film Dream Girl. It stars an ensemble cast of Ayushmann Khurrana, Ananya Panday",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16910_dream-girl-2_cover.jpg"
            }},

            {{
                title: "ZARA HATKE ZARA BACHKE",
                desc: "Indore residents Kapil and Somya, a happily married couple living in a joint household, decide to file for divorce one day. As soon as their family finds out, things don't go as planned, and a comedy of mishaps ensues.",
                image: "https://imgs.search.brave.com/x7fuEKXHrospagm1PGvFpcMCEhzdrMkYYgm-Z_4mdvg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qb2Jy/YXN0YS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDYv/MDQtMS03Njh4MTAy/NC5qcGc"
            }},

            {{
                title: "BLOODY DADDY",
                desc: " Bloody Daddy is a 2023 Indian Hindi-language action thriller film directed by Ali Abbas Zafar who co-wrote the film with Aditya Basu and Siddharth–Garima, and produced by Jio Studios. It features Shahid Kapoor, Sanjay Kapoor, Diana Penty, Ronit Roy, Rajeev Khandelwal, Ankur Bhatia and Vivan ",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16985_bloody-daddy_cover.jpg"
            }},
            {{
                title: "ADIPURUSH",
                desc: "Adipurush (transl. First man) is a 2023 Indian mythological action film based on the Hindu epic Ramayana. The film is directed and co-written by Om Raut, and produced by T-Series and Retrophiles. Shot simultaneously in Hindi and Telugu, the film features Prabhas, Saif Ali Khan, Kriti Sanon",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16709_adipurush_cover.jpg"
            }},

            {{
                title: "SATYAPREM KI KATHA",
                desc: "Kartik portrays mid-thirties-aged Satyaprem alias Sattu, who is eager to wed Kiara's character, Katha. When Katha's parents unexpectedly stop by Sattu's house to seek for Sattu's hand in marriage, Sattu's fantasies unexpectedly come true.",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16791_satyaprem-ki-katha_cover.jpg"
            }},

            {{
                title: "KISI KA BHAI KISI KI JAAN",
                desc: "Bhaijaan (Salman Khan) is determined to live his life as a bachelor in order to provide for his three younger bhais. But when a beautiful woman enters his life, things take an unexpected turn.",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16670_kisi-ka-bhai-kisi-ki-jaan_cover.jpg"
            }},
            {{
                title: "PONNIYIN SELVAN 2 ",
                desc: "Ponniyin Selvan: II is a 2023 Indian Tamil-language epic historical action film directed by Mani Ratnam and produced by Madras Talkies and Lyca Productions. It is the second of two cinematic parts based on the 1954 novel Ponniyin Selvan by Kalki Krishnamurthy. ",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16946_ponniyin-selvan-2_cover.jpg"
            }},

            {{
                title: "TU JHOOTHI MAIN MAKKAAR",
                desc: "Tini and Rahul fall in love in Tu Jhoothi Main Makkaar, and Tini later discovers that she cannot be with him. The plot revolves around family values, coming-of-age romance, and a roller coaster journey.",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16496_tu-jhoothi-main-makkaar_cover_new.jpg"
            }},

            {{
                title: "ZWIGATO",
                desc: "A man works as a food delivery rider, navigating the world of ratings and rewards. To supplement his income, his homemaker wife begins to look into alternative job prospects, both fearfully and excitedly.",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16959_zwigato_cover_new.jpg"
            }},
            {{
                title: "SHUBH NIKAH",
                desc: "Families from two distinct cultures clasp hands and come together for love, humanity, and peace, with a strong message of national integrity Families from two distinct cultures clasp hands and come together for love, humanity, and peace, with a strong message of national integrity.",
                image: "https://imgs.search.brave.com/wvA4uFoM5zzvNty09jbaJUU_z2Aar33XHaXvTGTHCww/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS50bWRiLm9yZy90/L3AvdzMwMC8yczA4/a1FCNlBDWTNUQUdr/QndkUjB4ZFB2Yjku/anBn"
            }},

            {{
                title: "BHEED",
                desc: "Bheed is based on the time when our country was divided in 1947, people who remained within its borders left the land in a vulnerable state. Nonetheless, the same thing happened in 2020. They have proved that there has been no social progress in huma...",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16835_bheed_cover.jpg"
            }},

            {{
                title: "BHOLAA",
                desc: "Bholaa (Ajay Devgn), who has been released from prison after ten years, is yearning to meet his daughter for the first time. However, he finds himself in a precarious situation when IPS officer Diana Joseph (Tabu) leaves him with no choice but to ass...",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16690_bholaa_cover.jpg"
            }},
            {{
                title: "SHEHZADA",
                desc: "Bantu has been despised by his father Valmiki since he was a kid. Samara, his supervisor, lavishes him with compassion and adoration until he realises that the Jindals are his parents. Bantu chooses to seek Jindals' affection and defend them from the...",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16834_shehzada_cover.jpg"
            }},

            {{
                title: "SELFIEE",
                desc: "Vijay Kumar, the Bollywood superstar, requires a new driver's licence from RTO officer Om Prakash Agarwal, a Vijay fan. A simple misunderstanding between the star and the officer turns into a quarrel that is played out in front of the entire country.",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16860_selfiee_cover.jpg"
            }},

            {{
                title: "MISSION MAJNU",
                desc: "Mission Majnu tells the tale of India's darkest RAW operation inside Pakistan. In his role as a RAW agent, Sidharth sacrificed himself for India in order to uncover a Pakistani plot to demolish India.",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16738_mission-majnu_cover.jpg"
            }},
            {{
                title: "PATHAAN",
                desc: "The storyline centers on a Pakistani officer who wants India to pay for this  when India repealed article 370 (the special status of Jammu and Kashmir). Jim, an ex-RAW agent who was wronged by his own people, is the formidable man he seeks out...",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16769_pathaan_cover.jpg"
            }},
            {{
                title: "KUSHI",
                desc: "Kushi (transl. Happiness) is an upcoming Indian Telugu-language romantic comedy film written and directed by Shiva Nirvana. Produced by Mythri Movie Makers, it stars Vijay Deverakonda and Samantha Ruth Prabhu. This film is scheduled to be released on 1 September 2023.",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16979_kushi_cover.jpg"
            }},
            {{
                title: "SALAAR",
                desc: "Salaar: Part 1  Ceasefire is an upcoming Indian Telugu-language action thriller film written and directed by Prashanth Neel, and produced by Vijay Kiragandur. It stars Prabhas as the titular character, along with Prithviraj Sukumaran, Shruti Haasan, Tinnu Anand, Easwari Rao, Jagapathi Babu, ...",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16944_salaar_cover.jpg"
            }},
            {{
                title: "JAWAN",
                desc: "Jawan (transl. Soldier) is an upcoming Indian Hindi-language action thriller film co-written and directed by Atlee, in his first Hindi film. It is produced by Gauri Khan and Gaurav Verma under Red Chillies",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16881_jawan_cover.jpg"
            }},
            {{
                title: "TIGER NAGESWARA RAO ",
                desc: "Tiger Nageswara Rao: Directed by Vamsee. With Anupam Kher, John Abraham, Karthi, Gayatri Bhardwaj. A legendary real-life robber of Stuartpuram, Andhra Pradesh called Tiger Nageswara Rao in the 1970s, who was noted for his ingenious ways of evading the police and prison.",
                image: "https://imgs.search.brave.com/1U8NSeK72jrll5k0r0v-83XJQu4TuSCSnTSTcduBusI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2luZWpvc2guY29t/L25ld3NpbWcvbmV3/c21haW5pbWcvcmF2/aS10ZWphLXBhbi1p/bmRpYW4tZmlsbS10/aWdlci1uYWdlc3dh/cmEtcmFvLXJlbGVh/c2luZy1vbi1vY3Rv/YmVyLTIwX2JfMjkw/MzIzMDEyNC5qcGc"
            }},
            {{
                title: "GANAPATH",
                desc: "Ganapath: Part 1 is an upcoming Indian Hindi-language dystopian action film directed by Vikas Bahl, who produced it under his banner Good Co in association with Jackky Bhagnani, Vashu Bhagnani and Deepshikha Deshmukh under Pooja",
                image: "https://imgs.search.brave.com/AXlInknYJfnXTqFag2WX8k-uW9AlhFDLrE2b2O-XEsY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtaW4uYm1zY2Ru/LmNvbS9pZWRiL21v/dmllcy9pbWFnZXMv/bW9iaWxlL3RodW1i/bmFpbC94bGFyZ2Uv/Z2FuYXBhdGgtcGFy/dC0xLWV0MDAzMDA5/MTgtMTgtMTEtMjAy/MC0wMi0yMS00Ny5q/cGc"
            }},
            {{
                title: "TIGER 3",
                desc: "Ganapath: Part 1 is an upcoming Indian Hindi-language dystopian action film directed by Vikas Bahl, who produced it under his banner Good Co in association with Jackky Bhagnani, Vashu Bhagnani and Deepshikha Deshmukh under Pooja",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16825_tiger-3_cover.jpg"
            }},
            {{
                title: "ANIMAL",
                desc: "A sequel to the 2001 comedy film 'The Animal' is set to be released on Fox's AVOD platform Tubi, with Rob Schneider reprising his starring role as Marvin Mange, a police evidence clerk whose behavior changed after he got animal parts transplanted following a critical injury. ",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16743_animal_cover.jpg"
            }},
            {{
                title: "FUKREY 3",
                desc: "Fukrey 3: Directed by Mrighdeep Lamba. With Ali Fazal, Pankaj Tripathi, Farhan Akhtar, Richa Chadha. The friends facing disastrously funny situations together and having each other's backs through the trenches to make it out of a new mess this time.",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16869_fukrey-3_cover.jpg"
            }},
            {{
                title: "YODHA",
                desc: "Yodha is an upcoming Hindi language action thriller film directed by Sagar Ambre and Pushkar Ojha. Produced by Karan Johar under Dharma Productions, The film stars Sidharth Malhotra, Disha Patani and Raashii Khanna. Yodha is scheduled for theatrical",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16849_yodha_cover.jpg"
            }},
             {{
                title: "Rocky Aur Rani Kii Prem Kahaani",
                desc: "'Rocky Aur Rani Kii Prem Kahaani' narrates the captivating love story between two individuals from different cultural backgrounds. Rocky Randhawa, a vibrant and lively Punjabi gentleman, finds his heart captivated by the intellectual charm of Rani Ch...",
                image: "https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16792_rocky-aur-rani-kii-prem-kahaani_cover.jpg"
            }}
            ]

        </>

    )
}

export default Movies_Data