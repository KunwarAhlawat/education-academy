const Data = {
  courseList: [
    {
      id: "NEET-2024-Offline",
      onlineCourse: {
        imgSrc2: "/assets/img/onlineCourseList/1.png",
        title2: "NEET 2024 Course",
        details2: "Course Details:",
        includedText: {
          left: [
            { icon: "bi bi-check-square", text: "1 year Duration" },
            { icon: "bi bi-check-square", text: "100+ Lectures" },
          ],
          right: [
            { icon: "bi bi-check-square", text: "Offline" },
            { icon: "bi bi-check-square", text: "3 Batches" },
          ],
        },
        price: {
          regularPrice: "Rs 499/-",
          discountedPrice: "Rs 2999/-",
          discountPercentage: "28% OFF",
        },
        links: {
          explore: "/courseview/NEET-2024-Offline", // Add the appropriate URL
          buyNow: "#", // Add the appropriate URL
        },
      },

      courseListPage: {
        imgSrc2: "/assets/img/4.course-list/1.png",
        title2: "IIT-JJE 2024 Mastery Offline Program",
        details2: "Course Details:",
        includedText: {
          left: [
            { icon: "bi bi-check-square", text: "1 year Duration" },
            { icon: "bi bi-check-square", text: "100+ Lectures" },
          ],
          right: [
            { icon: "bi bi-check-square", text: "Offline" },
            { icon: "bi bi-check-square", text: "3 Batches" },
          ],
        },
        price: {
          regularPrice: "Rs 499/-",
          discountedPrice: "Rs 2999/-",
          discountPercentage: "28% OFF",
        },
        links: {
          explore: "/courseview/NEET-2024-Offline", // Add the appropriate URL
          buyNow: "#", // Add the appropriate URL
        },
      },
    },
    {
      id: "IIT-JEE-2024-Offline",
      onlineCourse: {
        imgSrc2: "/assets/img/onlineCourseList/2.png",
        title2: "CAT 2024 Course",
        details2: "Course Details:",
        includedText: {
          left: [
            { icon: "bi bi-check-square", text: "1 year Duration" },
            { icon: "bi bi-check-square", text: "100+ Lectures" },
          ],
          right: [
            { icon: "bi bi-check-square", text: "Offline" },
            { icon: "bi bi-check-square", text: "3 Batches" },
          ],
        },
        price: {
          regularPrice: "Rs 499/-",
          discountedPrice: "Rs 2999/-",
          discountPercentage: "28% OFF",
        },
        links: {
          explore: "/courseview/NEET-2024-Offline", // Add the appropriate URL
          buyNow: "#", // Add the appropriate URL
        },
      },


      courseListPage: {
        imgSrc2: "/assets/img/4.course-list/4.png",
        title2: "CAT-2024 Mastery Offline Program",
        details2: "Course Details:",
        includedText: {
          left: [
            { icon: "bi bi-check-square", text: "1 year Duration" },
            { icon: "bi bi-check-square", text: "100+ Lectures" },
          ],
          right: [
            { icon: "bi bi-check-square", text: "Offline" },
            { icon: "bi bi-check-square", text: "3 Batches" },
          ],
        },
        price: {
          regularPrice: "Rs 999/-",
          discountedPrice: "Rs 4999/-",
          discountPercentage: "28% OFF",
        },
        links: {
          explore: "courseview/NEET-2024-Offline", // Add the appropriate URL
          buyNow: "#", // Add the appropriate URL
        },
      },
    },
    {
      id: "CAT-2024-Offline",
      onlineCourse: {
        imgSrc2: "/assets/img/onlineCourseList/3.png",
        title2: "IIT-JE E 2024  Course",
        details2: "Course Details:",
        includedText: {
          left: [
            { icon: "bi bi-check-square", text: "1 year Duration" },
            { icon: "bi bi-check-square", text: "100+ Lectures" },
          ],
          right: [
            { icon: "bi bi-check-square", text: "Offline" },
            { icon: "bi bi-check-square", text: "3 Batches" },
          ],
        },
        price: {
          regularPrice: "Rs 499/-",
          discountedPrice: "Rs 2999/-",
          discountPercentage: "28% OFF",
        },
        links: {
          explore: "/courseview/NEET-2024-Offline", // Add the appropriate URL
          buyNow: "#", // Add the appropriate URL
        },
      },


      courseListPage: {
        imgSrc2: "/assets/img/4.course-list/3.png",
        title2: "NEET 2024 Preparation Offline Program ",
        details2: "Course Details:",
        includedText: {
          left: [
            { icon: "bi bi-check-square", text: "1 year Duration" },
            { icon: "bi bi-check-square", text: "100+ Lectures" },
          ],
          right: [
            { icon: "bi bi-check-square", text: "Offline" },
            { icon: "bi bi-check-square", text: "3 Batches" },
          ],
        },
        price: {
          regularPrice: "Rs 599/-",
          discountedPrice: "Rs 5999/-",
          discountPercentage: "28% OFF",
        },
        links: {
          explore: "courseview/CAT-2024-Offline", // Add the appropriate URL
          buyNow: "#", // Add the appropriate URL
        },
      },
    },
   
  ],
  banner: [
    {
      imgSrc: "/assets/img/2.home/1.slider/neet2.png",
      imgSrc2: "/assets/img/2.home/1.slider/mobile/neetBatches.png",
      altText: "Slide 1",
      link: "/courseview/10",
      class: "active",
    },
    {
      imgSrc: "/assets/img/2.home/1.slider/iije.png",
      imgSrc2: "/assets/img/2.home/1.slider/mobile/iitJee.png",
      altText: "Slide 2",
      link: "/courseview/11",
    },
    {
      imgSrc: "/assets/img/2.home/1.slider/cat1.png",
      imgSrc2: "/assets/img/2.home/1.slider/mobile/cat.png",

      altText: "Slide 3",
      link: "/courseview/12",
    },
    
  ],
  courseView: [
    //NEET
    {
      courseId: "NEET-2024-Offline",
      title: " NEET 2024 Mastery Program(Offline)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "At Education Academy, we understand the significance of the NEET exam in shaping your medical career. Our NEET 2024 Preparation Course is meticulously designed to empower aspiring medical professionals with the knowledge and skills needed to excel in this competitive examination.",
        "Comprehensive Coverage: In-depth coverage of the NEET 2024 syllabus to ensure a thorough understanding of all subjects - Physics, Chemistry, and Biology.",
        "Experienced Faculty: Learn from a team of experienced and dedicated faculty members who are experts in their respective fields.",
        "Interactive Learning: Engage in interactive learning sessions, discussions, and doubt-clearing sessions to enhance your understanding of complex topics.",
        "Regular Mock Tests: Assess your progress with regular mock tests designed to simulate the actual NEET exam conditions, helping you manage time and build exam confidence.",
        "Personalized Attention: Small batch sizes to ensure personalized attention and focused guidance for every student.",
        "Study Material: Receive comprehensive study material that is curated by our expert faculty, covering the latest exam patterns and trends.",
        "Conceptual Clarity: Emphasis on building strong foundational concepts to tackle both basic and advanced-level questions."
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
          // { count: "9:00AM to 12:00", description: "Morning Batch" },
          // { count: "12:00 to 3:00PM", description: "Afternoon Batch" },
          // { count: "4:00PM to 7:00PM", description: "Evening Batch" },
        ],
      },
      faculty: {
    
        title: "Our Faculties",
        items: [
          {
                facultyId : "01",
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q. Who are the faculty members for the NEET 2024 course?",
            answer:
              "Our experienced and dedicated faculty members are experts in their respective fields, providing top-notch education.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q. Is there study material provided for the NEET 2024 course?",
            answer:
              "Absolutely! Comprehensive study material curated by our expert faculty is provided, covering the latest exam patterns and trends.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q. What is the fee structure for the NEET 2024 Preparation Course?",
            answer:
              "Our fee structure is affordable, with flexible payment options to make quality education accessible to all aspiring medical professionals.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q. How are the classes scheduled for the NEET 2024 course?",
            answer:
              "Regular classes are held on weekdays with additional weekend sessions for doubt resolution.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q. What sets Education Academy apart in NEET preparation?",
            answer:
              "Our proven track record of students achieving excellent results, coupled with a focus on conceptual clarity and overall development, makes us the ideal choice for NEET 2024 preparation.",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    {
      courseId: "NEET-2024-Online",
      title: " NEET 2024 Mastery Program(Online)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Welcome to our Education Academy's comprehensive NEET 2024 Online Preparation Course! Designed to empower aspiring medical professionals, this course is meticulously crafted to ensure success in the upcoming NEET examination. Here are the key details:",
        "Comprehensive Curriculum: Our NEET 2024 course covers the entire syllabus, ensuring that students are well-prepared for all subjects – Physics, Chemistry, and Biology.",
        "Expert Faculty: Learn from experienced and highly qualified instructors who specialize in NEET preparation. Our faculty members are dedicated to guiding students towards excellence.",
        "Interactive Learning: Engage in interactive sessions, quizzes, and discussions to enhance your understanding of complex topics. Our online platform provides a dynamic learning environment.",
        "Mock Tests: Sharpen your exam-taking skills with regular mock tests designed to simulate the NEET examination environment. Receive detailed feedback and analysis to track your progress.",
        "Personalized Feedback: Benefit from personalized feedback on your performance, helping you identify strengths and areas for improvement. Our instructors are committed to supporting your academic growth.",
        "Study Material: Gain access to comprehensive study materials, including notes, reference books, and online resources. Our curated content ensures a thorough understanding of key concepts.",
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
          // { count: "9:00AM to 12:00", description: "Morning Batch" },
          // { count: "12:00 to 3:00PM", description: "Afternoon Batch" },
          // { count: "4:00PM to 7:00PM", description: "Evening Batch" },
        ],
      },
      faculty: {
    
        title: "Our Faculties",
        items: [
          {
                facultyId : "01",
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.What is the duration of the NEET 2024 Online Preparation Course?",
            answer:
              "The duration of the course is flexible, with options ranging from a regular-paced curriculum to an intensive crash course. Depending on the batch you choose, the duration may vary.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.How can I access the study materials and resources?",
            answer:
              "Upon enrollment, you will receive login credentials for our online platform. All study materials, including notes, reference books, and additional resources, can be accessed through this platform for a comprehensive learning experience.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.Are there any prerequisites for joining the NEET 2024 Online Course?",
            answer:
              "There are no specific prerequisites. This course is open to all students preparing for the NEET 2024 examination. Whether you are a beginner or have some prior preparation, our course is designed to cater to students at different levels.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.How often are mock tests conducted, and how will I receive feedback?",
            answer:
              "Mock tests are regularly scheduled to simulate the NEET examination environment. After completing a test, you will receive detailed feedback and analysis of your performance. This personalized feedback helps you understand your strengths and areas that need improvement.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Can I switch between batches if my schedule changes?",
            answer:
              "Yes, you can request a batch switch based on your changing schedule or preferences. We understand the importance of flexibility, and our team will work with you to ensure that you have the best learning experience possible. Simply contact our support team for assistance.",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },

    //IIT JEE
    {
      courseId: "IIT-JEE-2024-Offline",
      title: "IIT JEE 2024 Mastery Program(Offline)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "At Education Academy, we understand the significance of quality education in shaping a bright future. Our IIT JEE 2024 course is meticulously designed to propel aspiring minds towards success in one of the most competitive exams in the country. Here's what sets our program apart:",
        "Comprehensive Curriculum: Our curriculum is crafted by experienced educators, covering all the essential topics and concepts required for the IIT JEE 2024 exam.",
        "Expert Faculty: Learn from the best minds in the industry with our team of experienced and dedicated faculty members who are committed to nurturing your potential.",
        "Regular Assessments: Stay on track with your progress through regular assessments and mock exams, providing a real-time understanding of your strengths and areas for improvement.",
        "Interactive Learning: Engage in dynamic and interactive learning sessions that go beyond traditional methods, ensuring a deeper understanding of complex subjects.",
        "Personalized Attention: Benefit from personalized attention in small batch sizes, allowing our instructors to address individual queries and provide tailored guidance.",
        "Advanced Study Material: Access top-notch study material, curated to simplify complex concepts and aid in efficient exam preparation."
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "What makes the IIT JEE 2024 course at Education Academy unique?",
            answer:
              "Our course stands out with its comprehensive curriculum, expert faculty, regular assessments, interactive learning, and personalized attention, ensuring a holistic and effective preparation for the IIT JEE 2024 exam.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.How are batch sizes managed for the IIT JEE 2024 program?",
            answer:
              "We maintain small batch sizes to provide personalized attention, fostering an environment where students can actively engage with instructors, ask questions, and receive individualized guidance for their exam preparation.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.What kind of study material is provided for the IIT JEE 2024 exam preparation?",
            answer:
              "We provide advanced study material curated by experienced educators. The material is designed to simplify complex concepts, making it easier for students to grasp and apply their knowledge effectively during exam preparation.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.How do I secure admission for the IIT JEE 2024 batch at Education Academy?",
            answer:
              "The admission process is straightforward. Our dedicated team is available to guide you through each step, ensuring a hassle-free experience. Connect with us to secure your spot and embark on your journey towards success in the IIT JEE 2024 examination.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.Is there any provision for mock exams or assessments in the IIT JEE 2024 course at Education Academy?",
            answer:
              "Certainly! We understand the importance of regular assessments and mock exams in gauging your progress. Our IIT JEE 2024 course includes a structured system of mock exams and assessments to provide real-time feedback, helping you identify strengths and areas for improvement throughout your preparation journey.",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    {
      courseId: "IIT-JEE-2024-Online",
      title: "IIT JEE 2024 Mastery Program(Online)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Welcome to Education Academy's comprehensive online coaching program designed specifically for IIT JEE 2024 aspirants. Our course is crafted to empower students with the knowledge and skills required to excel in one of the most competitive entrance exams in India.",
        "Expert Faculty: Learn from experienced and highly qualified faculty members with a proven track record in guiding students to success.",
        "Interactive Learning: Engage in interactive online classes that promote real-time interaction between students and teachers, fostering a dynamic learning environment.",
        "Comprehensive Study Material: Access well-structured study material curated by subject matter experts, covering the entire syllabus of IIT JEE 2024.",
        "Regular Assessments: Gauge your progress through regular assessments, quizzes, and mock tests to identify strengths and areas that need improvement.",
        "Doubt Resolution Sessions: Clarify doubts instantly with dedicated doubt resolution sessions conducted by our faculty to ensure a clear understanding of concepts.",
        "Personalized Attention: Benefit from small batch sizes that enable personalized attention, ensuring that every student receives the guidance needed for success.",
        "Convenient Schedule: Enjoy the flexibility of an online platform with classes scheduled at times that accommodate the needs of students, allowing for effective time management.",
        "Performance Analysis: Receive detailed performance analysis reports to track your progress, understand weak areas, and tailor your preparation accordingly.",
        "Regular Updates: Stay informed with regular updates on exam patterns, syllabus changes, and important announcements related to IIT JEE 2024."
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.What is the duration of the IIT JEE 2024 online preparation course?",
            answer:
              "The duration of the course is [specify duration], providing ample time for comprehensive coverage of the IIT JEE syllabus.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.How are doubts addressed in the online classes?",
            answer:
              "We conduct dedicated doubt resolution sessions where students can ask questions and clarify doubts. Our experienced faculty ensures that each query is addressed effectively.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.Can I access the study material offline?",
            answer:
              "The study material is available online for easy access. However, if you need offline access, you can download and save the materials for your convenience",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.Is the course schedule flexible for working students or those with other commitments?",
            answer:
              "Yes, the course is designed to accommodate the needs of students with varying schedules. We offer flexibility in class timings to ensure that students can manage their time effectively and participate in classes without any hindrance.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.How often are assessments and mock tests conducted?",
            answer:
              "Regular assessments, quizzes, and mock tests are conducted to assess your progress. These evaluations are scheduled at regular intervals to help you track your performance and make necessary improvements.",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },

    //CAT
    {
      courseId: "CAT-2024-Offline",
      title: "CAT 2024 Preparation Program(Offline)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Welcome to Education Academy's CAT 2024 Preparation Program! Our comprehensive course is designed to equip you with the essential skills and strategies to excel in the Common Admission Test (CAT) and secure admission to esteemed business schools. Here's a breakdown of what you can expect:",
        "Expert Faculty: Learn from seasoned instructors with a proven track record of success in CAT coaching. Our faculty brings a wealth of experience to guide you through every aspect of the exam.",
        "Customized Curriculum: Tailored content covering all three sections – Verbal Ability and Reading Comprehension (VARC), Data Interpretation and Logical Reasoning (DILR), and Quantitative Ability (QA). Our curriculum is aligned with the latest CAT syllabus.",
        "Mock Tests: Regular simulated CAT exams to assess your progress, identify strengths and weaknesses, and fine-tune your exam-taking strategy. Detailed performance analysis provided to enhance your preparation.",
        "Study Material: Access to comprehensive study materials, including practice questions, solved examples, and tips and tricks to boost your understanding of key concepts.",
        "Interactive Learning: Engage in interactive sessions, doubt-solving forums, and group discussions to enhance your learning experience. Personalized attention to address individual queries and concerns.",
        "Time Management Strategies: Master time management techniques crucial for completing the CAT exam within the allotted time. Practice with time-bound quizzes and exercises to improve your efficiency."
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.What is the eligibility criteria for the CAT 2024 Preparation Program at Education Academy?",
            answer:
              "The CAT 2024 Preparation Program at Education Academy is open to individuals with a Bachelor's degree in any discipline, with a minimum aggregate of 50% or equivalent CGPA. There is no age restriction, and candidates in their final year of graduation are also eligible.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.How are the batches structured, and what is the duration of the CAT 2024 Preparation Program?",
            answer:
              "Our CAT 2024 Preparation Program is structured in comprehensive batches, each lasting [Number of Weeks/Months]. The classes are scheduled [Number of Days per Week], offering flexibility for both working professionals and students to attend. The batch commencement date is 1-March-2024.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.Can I enroll in the program if I have limited time availability due to work or other commitments?",
            answer:
              "Absolutely! The program is designed with flexibility in mind, accommodating the busy schedules of working professionals and students. We offer convenient class timings, and our study materials are curated to support self-paced learning.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.How does Education Academy assess the progress of students during the CAT 2024 Preparation Program?",
            answer:
              "To monitor your progress, we conduct regular mock tests simulating the CAT exam environment. These tests help identify your strengths and weaknesses, allowing our expert faculty to provide personalized feedback. Detailed performance analysis reports are provided to help you track your improvement.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.What is the enrollment process, and how can I secure a spot in the CAT 2024 Preparation Program?",
            answer:
              "To enroll, simply visit our website at educationacademy.com and follow the easy online registration process. Alternatively, you can visit our center in person to complete the enrollment. As seats are limited, we recommend early registration to guarantee your participation in the program. For any further assistance, feel free to contact our admissions team at 8449511111 or contact@educationacademy.com.",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    {
      courseId: "CAT-2024-Online",
      title: "CAT 2024 Preparation Program(Online)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Welcome to Education Academy's CAT 2024 Online Preparation Program! Get ready to tackle the Common Admission Test from the comfort of your own space. Here's what you'll get:",
        "Expert Online Teachers: Learn from experienced online teachers who are here to help you understand CAT concepts. Attend virtual classes to ask questions and get personalized guidance.",
        "Flexible Learning: Study whenever and wherever you want with our easy-to-use online platform. Fit your study sessions around your schedule.",
        "Easy-to-Understand Lessons: We cover Verbal Ability, Reading Comprehension, Data Interpretation, Logical Reasoning, and Quantitative Ability in simple language. Our materials are updated to match the latest CAT syllabus.",
        "Online Practice Tests: Practice for CAT with our online mock tests. They'll help you see where you're doing well and where you can improve. Get feedback to boost your skills.",
        "Digital Study Materials: Access e-books, practice questions, and video lessons online, 24/7. Learn at your own pace with resources that are easy to understand.",
        "Live Q&A Sessions: Join live sessions to get your doubts cleared and participate in virtual group discussions. Our online platform keeps learning engaging and interactive.",
        "Time Management Tools: Learn how to manage your time effectively for CAT. Practice with timed quizzes to improve your speed and efficiency online."
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.What is the duration of the CAT 2024 Online Prep program?",
            answer:
              "The program duration is flexible, allowing you to choose a study plan that fits your schedule. You can study for a few weeks or months, depending on your pace and availability.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.How can I enroll in the CAT 2024 Online Prep program?",
            answer:
              "To enroll, simply visit our website educationacademy.com. Limited spots are available, so secure yours as soon as possible.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.Are the online classes live or pre-recorded?",
            answer:
              "The online classes are live, providing you with the opportunity to interact with instructors in real-time. Live Q&A sessions, group discussions, and doubt-solving forums enhance the interactive learning experience.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.Can I access study materials at any time, or are there specific hours for study materials?",
            answer:
              "You can access digital study materials, including e-books, practice questions, and video lessons, at any time that suits you. Our online platform allows 24/7 access for your convenience.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.How often are the online mock tests conducted, and how do I receive feedback on my performance?",
            answer:
              "Online mock tests are conducted regularly to assess your progress. After each test, you will receive detailed performance reports highlighting your strengths and areas for improvement, helping you refine your CAT preparation strategy.",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },

    // UP Police
    {
      courseId: "UP-Police-2024-Offline",
      title: " UP Police 2024 Mastery Program (Offline)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Welcome to our UP Police 2024 Mastery Program, an exclusive offline course designed to prepare you thoroughly for the upcoming UP Police recruitment exam. Here's a glimpse of what you can expect:",
        "Comprehensive Coverage: Our program is meticulously crafted to cover all relevant topics and subjects required for the UP Police 2024 exam.",
        "Experienced Faculty: Learn from experienced instructors who bring a wealth of knowledge and expertise to guide you through the entire syllabus.",
        "Exam-Oriented Approach: Our focus is on providing targeted preparation, ensuring you are well-equipped to tackle the specific challenges posed by the UP Police exam.",
        "Limited Seats: To facilitate personalized attention, we maintain small batch sizes, allowing for effective interaction between students and instructors.",
        "Flexible Timings: Choose from a variety of batch timings to accommodate your schedule and ensure a hassle-free learning experience.",
        "Weekend Batches: Ideal for working professionals and students, our weekend batches provide a convenient option to balance your study and other commitments.",
        "Mock Tests and Assessments: Regular mock tests and assessments to gauge your progress and identify areas for improvement.",
        "Doubt Resolution Sessions: Dedicated sessions to address your doubts and queries, ensuring clarity on every concept.",
        "Study Materials: Receive comprehensive study materials curated by experts, designed to enhance your understanding and retention.",
        "Take the first step towards a rewarding career in law enforcement. Enroll in our UP Police 2024 Mastery Program and embark on a journey towards success. Limited seats available, so secure your spot now!"
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.What is the duration of the UP Police 2024 Mastery Program?",
            answer:
              "The program's duration is designed to provide comprehensive coverage of the syllabus. Typically, it spans several months, ensuring thorough preparation for the UP Police exam.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Are the study materials included in the course fee?",
            answer:
              "Yes, the course fee covers the cost of study materials. You will receive well-curated materials prepared by experienced educators, aiding your understanding of key concepts.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.How are doubts addressed in the program?",
            answer:
              "We conduct dedicated doubt resolution sessions where experienced instructors address queries and clarify doubts. Additionally, our faculty is available for one-on-one discussions to ensure complete understanding.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.Can I join the UP Police 2024 Mastery Program if I have a busy schedule?",
            answer:
              "Absolutely! We understand the varied commitments individuals have. That's why we offer flexible batch timings, including weekend batches, to accommodate different schedules and provide convenience to working professionals and students.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.What sets this program apart from others in the market?",
            answer:
              "Our UP Police 2024 Mastery Program stands out due to its exam-oriented approach, small batch sizes, and personalized guidance. We have a successful track record, and our focus extends beyond exam preparation to holistic skill development, giving you a competitive edge in the recruitment process.",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    {
      courseId: "UP-Police-2024-Online",
      title: "UP Police 2024 Mastery Program (Online)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Welcome to Education Academy's UP Police 2024 Mastery Program, designed to empower aspiring candidates with the knowledge and skills needed to excel in the upcoming UP Police examination. Our comprehensive online program ensures a seamless learning experience, allowing you to prepare effectively and confidently from the comfort of your home.",
        "Expert Faculty: Learn from experienced instructors with a deep understanding of the UP Police exam pattern and syllabus.",
        "Comprehensive Curriculum: Master all relevant subjects, including General Knowledge, Numerical Ability, Reasoning, and Current Affairs.",
        "Interactive Learning: Engage in live interactive sessions, Q&A forums, and discussion groups to enhance your understanding and clarify doubts.",
        "Self-Paced Modules: Access course materials at your convenience, enabling you to study at your own pace while balancing other commitments.",
        "Mock Tests and Assessments: Evaluate your progress through regular mock tests and assessments, simulating the actual exam environment.",
        "Study Material: Receive well-structured study materials, notes, and reference guides to aid your preparation.",
        "Regular Updates: Stay informed about the latest exam trends, updates, and important announcements related to the UP Police 2024 examination.",
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.Can I access the course materials at any time, or are there specific timings for classes?",
            answer:
              "The UP Police 2024 Mastery Program is designed to accommodate your schedule. While we do offer live interactive sessions, all course materials are accessible 24/7, allowing you to study at your own convenience.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.How are doubts addressed in the online program?",
            answer:
              "We prioritize a supportive learning environment. You can clarify doubts during live sessions, participate in Q&A forums, or reach out to our experienced faculty through dedicated discussion groups. Your understanding is our priority.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.Are there any mock tests included in the program, and how do they contribute to my preparation?",
            answer:
              "Absolutely. Regular mock tests and assessments are an integral part of the UP Police Mastery Program. These tests simulate the actual exam environment, helping you evaluate your progress, identify areas for improvement, and build confidence for the final examination.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.Can I enroll if I have missed the batch start date?",
            answer:
              "While we recommend joining at the beginning of the batch for a comprehensive learning experience, we understand that circumstances vary. Contact our support team, and they will guide you on the best possible solution, including catch-up options and study materials.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.What is the validity period of the course, and can I revisit the materials after completion?",
            answer:
              "The UP Police 2024 Mastery Program offers access to course materials for the entire duration of the batch. Additionally, after completing the program, you will have continued access to the study materials for a specified period, allowing you to revisit and reinforce your learning as needed.",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },

    // ssc cgl
    {
      courseId: "ssc-cgl-offline",
      title: "SSC-CGL 2024 Mastery Program (Offline)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Exclusive Offer - Limited Spots Available",
        "Join our SSC-CGL 2024 Mastery Program at Education Academy and set yourself up for success. Our course is made for folks like you, providing the knowledge and skills needed to do well in the SSC Combined Graduate Level (CGL) exam.",
        "What's Special:",
        "Learn Everything: We cover the SSC-CGL 2024 topics in-depth like Math, English, Reasoning, and General Knowledge.",
        "Awesome Teachers: Our experienced teachers know their stuff and will help you understand each subject better.",
        "Talk and Learn: Get involved in chats, discussions, and classes that clear up any confusion and boost your confidence.",
        "Practice Tests: Regular practice tests make sure you're ready for the real SSC-CGL exam. They help with time management and show how much you've improved.",
        "Small Classes: Classes are small, so you get personal attention and help when you need it.",
        "Study Materials: You'll get easy-to-understand study materials created by our experts, covering everything you need for the exam.",
        "Understand the Basics: We focus on making sure you get the basics right, so you can handle any kind of question."
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.Who teaches in the SSC-CGL 2024 course?",
            answer:
              "Our experienced teachers are experts in their subjects and are here to make learning easy for you.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Do I get study materials for the SSC-CGL 2024 course?",
            answer:
              "Yes, you'll get study materials that are easy to understand and cover everything for the exam.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.How much does the SSC-CGL 2024 Mastery Program cost?",
            answer:
              "Absolutely. We have a special offer right now. Get in touch with us for the details.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.When are the classes for the SSC-CGL 2024 course?",
            answer:
              "You can choose from morning, afternoon, or evening classes to fit your schedule.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.What makes Education Academy different for SSC-CGL preparation?",
            answer:
              "We have great teachers, fun learning, personal attention, and a complete approach. Join us to increase your chances of success in SSC-CGL 2024!",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    {
      courseId: "ssc-cgl-online",
      title: "SSC-CGL 2024 Mastery Program (Online)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Limited Seats - Enroll Now!",
        "Step into success with our SSC-CGL 2024 Mastery Program offered online at Education Academy. This program is tailored to equip individuals like you with the essential knowledge and skills to excel in the SSC Combined Graduate Level (CGL) examination.",
        "Comprehensive Learning: Dive deep into the SSC-CGL 2024 syllabus, covering Math, English, Reasoning, and General Knowledge.",
        "Expert Instructors: Learn from experienced instructors who specialize in their subjects, ensuring a clear understanding of each topic.",
        "Interactive Sessions: Engage in live discussions, interactive sessions, and Q&A forums to enhance your comprehension and boost confidence.",
        "Mock Tests: Regular practice tests in a simulated online environment prepare you for the actual SSC-CGL exam, improving time management and tracking progress.",
        "Personalized Support: Benefit from personalized assistance and guidance in our online classes, fostering an environment for effective learning.Small Classes: Classes are small, so you get personal attention and help when you need it.",
        "Comprehensive Study Materials: Receive user-friendly study materials prepared by our experts, covering all facets of the exam.",
        "Emphasis on Fundamentals: Focus on building a strong foundation, ensuring proficiency in tackling various question types."
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.Who teaches in the SSC-CGL 2024 online course?",
            answer:
              "Our skilled instructors, experts in their fields, are committed to making your online learning experience effective and enjoyable.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Are study materials provided for the SSC-CGL 2024 online course?",
            answer:
              "Yes, you'll receive comprehensive study materials designed for easy understanding and covering all exam topics.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.What is the cost of the SSC-CGL 2024 Mastery Program online?",
            answer:
              "Limited-time offers are available. Connect with us for detailed pricing information.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q. How are the online classes scheduled for the SSC-CGL 2024 course?",
            answer:
              "Choose from morning, afternoon, or evening sessions to fit your schedule seamlessly.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.What makes Education Academy different for SSC-CGL preparation?",
            answer:
              "We have great teachers, fun learning, personal attention, and a complete approach. Join us to increase your chances of success in SSC-CGL 2024!",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
   
    // ssc gd
    {
      courseId: "ssc-gd-offline",
      title: "SSC-GD 2024 Mastery Program (Offline)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Limited Seats - Enroll Now!",
        "Join our SSC-GD 2024 Mastery Program at Education Academy and pave the way for success in the Staff Selection Commission - General Duty (SSC-GD) examination. This program is meticulously designed to equip aspirants like you with the necessary knowledge and skills required for the exam.",
        "Thorough Coverage: Dive into the SSC-GD 2024 syllabus comprehensively, focusing on General Intelligence & Reasoning, General Knowledge & General Awareness, Elementary Mathematics, and English/Hindi.",
        "Experienced Instructors: Learn from experienced instructors, experts in their respective subjects, ensuring a clear understanding of each topic.",
        "Interactive Learning: Engage in live discussions, interactive sessions, and doubt-clearing classes to enhance your understanding and boost confidence.",
        "Practice Tests: Regular mock tests simulate the actual SSC-GD exam conditions, aiding in time management and tracking your progress effectively.",
        "Personalized Attention: Enjoy small batch sizes for personalized attention, ensuring your individual learning needs are addressed.",
        "Study Material: Receive comprehensive study material curated by our expert faculty, covering the latest exam patterns and trends.",
        "Emphasis on Basics: Focus on building a strong foundation, enabling you to tackle various question types confidently."
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.Who are the instructors for the SSC-GD 2024 offline course?",
            answer:
              "Our experienced instructors are subject matter experts committed to providing quality education.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Is study material provided for the SSC-GD 2024 offline course?",
            answer:
              "Yes, you'll receive comprehensive study materials curated by our expert faculty.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.What is the fee structure for the SSC-GD 2024 Mastery Program?",
            answer:
              "Connect with us for detailed fee information and exclusive offers.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.How are the classes scheduled for the SSC-GD 2024 course?",
            answer:
              "Choose from morning, afternoon, or evening batches to accommodate various schedules.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.What makes Education Academy unique in SSC-GD preparation?",
            answer:
              "Our commitment to experienced faculty, interactive learning, personalized attention, and a comprehensive approach distinguishes us. Join us to enhance your chances of success in SSC-GD 2024!",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    {
      courseId: "ssc-gd-online",
      title: "SSC-GD 2024 Mastery Program (Online)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Limited Seats - Enroll Now!",
        "Join our SSC-GD 2024 Mastery Program online at Education Academy and prepare for success in the Staff Selection Commission - General Duty (SSC-GD) examination. This program is thoughtfully crafted to equip aspirants like you with the necessary knowledge and skills required for the exam.",
        "Comprehensive Online Learning: Cover the SSC-GD 2024 syllabus online, focusing on General Intelligence & Reasoning, General Knowledge & General Awareness, Elementary Mathematics, and English/Hindi.",
        "Expert Online Instructors: Learn from experienced instructors who are experts in their respective subjects, ensuring a clear understanding of each topic in the online learning environment.",
        "Interactive Online Sessions: Engage in live discussions, interactive sessions, and doubt-clearing classes to enhance your understanding and boost confidence, all from the comfort of your home.",
        "Online Practice Tests: Regular online mock tests simulate the actual SSC-GD exam conditions, aiding in time management and tracking your progress effectively.",
        "Personalized Online Support: Enjoy small online class sizes for personalized attention, ensuring your individual learning needs are addressed during the virtual classes.",
        "Online Study Material: Receive comprehensive study material curated by our expert faculty, covering the latest online exam patterns and trends.",
        "Emphasis on Online Basics: Focus on building a strong online learning foundation, enabling you to tackle various question types confidently."
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.Who are the instructors for the SSC-GD 2024 offline course?",
            answer:
              "Our experienced instructors are subject matter experts committed to providing quality education.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Is study material provided for the SSC-GD 2024 online course?",
            answer:
              "Yes, you'll receive comprehensive online study materials curated by our expert faculty.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.What is the fee structure for the SSC-GD 2024 Mastery Program online?",
            answer:
              "Connect with us for detailed fee information and exclusive offers.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.How are the online classes scheduled for the SSC-GD 2024 course?",
            answer:
              "Choose from morning, afternoon, or evening online sessions to fit your schedule seamlessly.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.What makes Education Academy unique in SSC-GD preparation?",
            answer:
              "Our commitment to experienced online faculty, interactive virtual learning, personalized online attention, and a comprehensive approach distinguishes us. Join us online to enhance your chances of success in SSC-GD 2024!",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    

    //CTET
    {
      courseId: "ctet-offline",
      title: "CTET 2024 Mastery Program (Offline)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Limited Seats - Enroll Now!",
        "Embark on the journey to become a certified teacher with our CTET 2024 Mastery Program at Education Academy. Our carefully curated program is designed to provide aspiring teachers with the knowledge and skills needed to excel in the Central Teacher Eligibility Test (CTET).",
        "Program Features:",
        "Comprehensive Coverage: Dive into the CTET 2024 syllabus, covering Child Development and Pedagogy, Language I & II, Mathematics, Environmental Studies, and Social Studies.",
        "Experienced Educators: Learn from experienced educators who specialize in their subjects, offering insights and guidance to enhance your teaching skills.",
        "Interactive Learning: Engage in interactive sessions, discussions, and teaching methodologies to boost your understanding of child development and effective teaching techniques.",
        "Mock Tests: Regular mock tests designed to simulate the CTET exam conditions, aiding in time management and evaluating your preparation level.",
        "Comprehensive Study Material: Receive carefully crafted study material curated by our expert faculty, covering the latest teaching methodologies and educational trends.",
        "Emphasis on Teaching Fundamentals: Focus on building a strong foundation in teaching fundamentals, preparing you for both Paper I and Paper II of the CTET exam."
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.Who are the instructors for the SSC-GD 2024 offline course?",
            answer:
              "Our educators are experienced and qualified professionals dedicated to providing high-quality teacher training.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Is study material provided for the CTET 2024 offline course?",
            answer:
              "Yes, you will receive comprehensive study materials designed for easy understanding and covering all aspects of the CTET exam.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q. What is the fee structure for the CTET 2024 Mastery Program?",
            answer:
              "Contact us for detailed fee information and exclusive offers available for a limited time.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.How are the classes scheduled for the CTET 2024 course?",
            answer:
              "Choose from morning, afternoon, or evening batches to accommodate various schedules and make teacher training accessible.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q. What sets Education Academy apart in CTET preparation?",
            answer:
              "Our experienced educators, interactive learning approach, personalized attention, and a comprehensive curriculum make us the ideal choice for CTET preparation. Join us to excel in CTET 2024 and kickstart your teaching career!",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    {
      courseId: "ctet-online",
      title: "CTET 2024 Mastery Program (online)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Limited Online Seats - Enroll Now!",

"Embark on the journey to become a certified teacher with our CTET 2024 Mastery Program offered online at Education Academy. Our meticulously crafted online program is designed to provide aspiring teachers with the knowledge and skills needed to excel in the Central Teacher Eligibility Test (CTET).",

"Program Highlights:",

"Comprehensive Online Coverage: Dive into the CTET 2024 syllabus online, covering Child Development and Pedagogy, Language I & II, Mathematics, Environmental Studies, and Social Studies.",

"Expert Online Educators: Learn from experienced online educators who specialize in their subjects, offering insights and guidance through virtual learning platforms.",

"Interactive Online Learning: Engage in live discussions, virtual teaching methodologies, and Q&A forums to enhance your understanding of child development and effective online teaching techniques.",

"Online Mock Tests: Regular online mock tests designed to simulate the CTET exam conditions, aiding in time management and evaluating your preparation level.",

"Personalized Online Attention: Enjoy small online class sizes for personalized attention and focused guidance during virtual teacher training.",

"Online Study Material: Receive carefully crafted online study material curated by our expert faculty, covering the latest online teaching methodologies and educational trends.",

"Emphasis on Online Teaching Fundamentals: Focus on building a strong foundation in online teaching fundamentals, preparing you for both Paper I and Paper II of the CTET exam.",
    
],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.Who are the instructors for the SSC-GD 2024 offline course?",
            answer:
              "Our educators are experienced and qualified professionals dedicated to providing high-quality teacher training.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Is study material provided for the CTET 2024 offline course?",
            answer:
              "Yes, you will receive comprehensive study materials designed for easy understanding and covering all aspects of the CTET exam.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q. What is the fee structure for the CTET 2024 Mastery Program?",
            answer:
              "Contact us for detailed fee information and exclusive offers available for a limited time.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.How are the online classes scheduled for the CTET 2024 course?",
            answer:
              "Choose from morning, afternoon, or evening online sessions to fit your schedule seamlessly and make teacher training accessible from the comfort of your home.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q. What sets Education Academy apart in CTET preparation?",
            answer:
              "Our experienced online educators, interactive learning approach, personalized online attention, and a comprehensive curriculum make us the ideal choice for CTET preparation. Join us online to excel in CTET 2024 and kickstart your teaching career!",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    
    //UPTET
    {
      courseId: "uptet-online",
      title: "UPTET 2024 Mastery Program (Online)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        
"UPTET 2024 Mastery Program (Online)",

"Limited Online Slots - Secure Your Enrollment!",

"Embark on the journey to become a certified teacher with our UPTET 2024 Mastery Program online at Education Academy. Tailored to meet the specific requirements of the Uttar Pradesh Teacher Eligibility Test (UPTET), this program provides aspiring teachers with the knowledge and skills needed to excel.",

"Program Highlights:",

"Comprehensive Online Learning: Dive into the UPTET 2024 syllabus online, covering Child Development & Pedagogy, Language I & II, Mathematics, and Environmental Studies/Social Studies.",

"Experienced Online Instructors: Learn from experienced educators who specialize in their subjects, delivering insightful guidance and strategies for effective teaching, all in the online learning environment.",

"Interactive Online Sessions: Engage in live discussions, interactive sessions, and teaching methodologies online to enhance your understanding of child development and improve your teaching techniques.",

"Online Mock Tests: Regular online mock tests simulate UPTET exam conditions, aiding in time management and evaluating your preparation level effectively.",

"Personalized Online Support: Benefit from small online class sizes for personalized attention and focused guidance, ensuring effective online teacher training.",

"Online Study Materials: Receive carefully crafted online study materials curated by our expert faculty, covering the latest teaching methodologies and educational trends specific to UPTET.",

"Emphasis on Teaching Fundamentals: Focus on building a strong foundation in teaching fundamentals, preparing you for both Paper I and Paper II of the UPTET exam in the online format.",
      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.Who are the instructors for the UPTET 2024 online course?",
            answer:
              "Our experienced educators are qualified professionals dedicated to providing high-quality teacher training in the online format.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Is study material provided for the UPTET 2024 online course?",
            answer:
              "Yes, you'll receive comprehensive online study materials designed for easy understanding, covering all aspects of the UPTET exam.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q. What is the fee structure for the UPTET 2024 Mastery Program online?",
            answer:
              "Connect with us for detailed online fee information and exclusive offers available for a limited time.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.How are the online classes scheduled for the UPTET 2024 course?",
            answer:
              "Choose from morning, afternoon, or evening online sessions to fit your schedule seamlessly and make teacher training accessible from the comfort of your home.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.What sets Education Academy apart in UPTET online preparation?",
            answer:
              "Our experienced online educators, interactive learning approach, personalized online attention, and a comprehensive curriculum make us the ideal choice for UPTET preparation. Join us online to excel in UPTET 2024 and kickstart your teaching career!",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    {
      courseId: "uptet-offline",
      title: "UPTET 2024 Mastery Program (Offline)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Limited Seats - Enroll Today!",

        "Begin your journey towards becoming a certified teacher with our UPTET 2024 Mastery Program at Education Academy. Tailored to meet the specific requirements of the Uttar Pradesh Teacher Eligibility Test (UPTET), this program provides aspiring teachers with the knowledge and skills needed to excel.",
        
        "Program Highlights:",
        
        "Comprehensive Learning: Dive into the UPTET 2024 syllabus, covering Child Development & Pedagogy, Language I & II, Mathematics, and Environmental Studies/Social Studies.",
        
        "Experienced Instructors: Learn from experienced educators who specialize in their subjects, delivering insightful guidance and strategies for effective teaching.",
        
        "Interactive Sessions: Engage in live discussions, interactive sessions, and teaching methodologies to enhance your understanding of child development and improve your teaching techniques.",
        
        "Mock Tests: Regular mock tests simulate UPTET exam conditions, aiding in time management and evaluating your preparation level effectively.",
        
        "Personalized Support: Benefit from small class sizes for personalized attention and focused guidance, ensuring effective teacher training.",
        
        "Comprehensive Study Materials: Receive carefully crafted study materials curated by our expert faculty, covering the latest teaching methodologies and educational trends specific to UPTET.",
        
        "Emphasis on Teaching Fundamentals: Focus on building a strong foundation in teaching fundamentals, preparing you for both Paper I and Paper II of the UPTET exam.",   

      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.Who are the instructors for the UPTET 2024 offline course?",
            answer:
              "Our experienced educators are qualified professionals dedicated to providing high-quality teacher training.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Is study material provided for the UPTET 2024 offline course?",
            answer:
              "Yes, you'll receive comprehensive study materials designed for easy understanding, covering all aspects of the UPTET exam.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.What is the fee structure for the UPTET 2024 Mastery Program?",
            answer:
              "Connect with us for detailed fee information and exclusive offers available for a limited time.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.How are the classes scheduled for the UPTET 2024 course?",
            answer:
              "Choose from morning, afternoon, or evening sessions to fit your schedule seamlessly and make teacher training accessible.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.What sets Education Academy apart in UPTET Offline preparation?",
            answer:
              "Our experienced educators, interactive learning approach, personalized attention, and a comprehensive curriculum make us the ideal choice for UPTET preparation. Join us to excel in UPTET",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },

    //SUPER TET
    {
        courseId: "super-tet-online",
        title: "Super TET 2024 Mastery Program (Online)",
        discountText: "Special Discounted Price",
        price: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "(17% OFF)",
        },
        content: [
          "Embark on your journey towards becoming a certified teacher with our Super TET 2024 Mastery Program online at Education Academy. Tailored specifically for the Super Teacher Eligibility Test (Super TET), this program equips aspiring teachers with the essential knowledge and skills needed to excel in the examination.",
      
         "Comprehensive Online Learning: Delve into the Super TET 2024 syllabus online, covering Child Development & Pedagogy, Language I & II (Hindi/English), Mathematics, Science, and Social Studies.",
          
          "Experienced Online Instructors: Learn from experienced educators who specialize in their subjects, providing insightful guidance and strategies for effective teaching, all in the online learning environment.",
          
          "Interactive Online Sessions: Engage in live discussions, interactive sessions, and teaching methodologies online to enhance your understanding of child development and improve your teaching techniques.",
          
          "Online Mock Tests: Regular online mock tests simulate Super TET exam conditions, aiding in time management and evaluating your preparation level effectively.",
          
          "Personalized Online Support: Benefit from small online class sizes for personalized attention and focused guidance, ensuring effective teacher training.",
          
          "Online Study Materials: Receive meticulously curated study materials online, covering the latest teaching methodologies and educational trends specific to Super TET.",
          
          "Emphasis on Teaching Fundamentals: Focus on building a strong foundation in teaching fundamentals, preparing you comprehensively for the Super TET exam.",  
  
        ],
        batchDetails: {
          title: "Batch Details",
          items: [
            { count: "Morning Batch", description: "9:00AM to 12:00" },
            { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
            { count: "Evening Batch", description: "4:00PM to 7:00PM" },
          ],
        },
        faculty: {
          title: "Our Faculties",
          items: [
            {
              name: "Ram Singh",
              qualification: "MSC in Biochemistry",
              experience: "13 Years",
              imageSrc: "/assets/img/5.course-view/1.faculty.png",
            },
          ],
        },
        faq: {
          title: "FAQ",
          items: [
            {
              accordion: {
                head: {
                  id: "panelsStayOpen-headingOne",
                  button: {
                    class: "accordion-button",
                    dataBsTarget: "#panelsStayOpen-collapseOne",
                    ariaExpanded: "false",
                    ariaControls: "panelsStayOpen-collapseOne",
                  },
                },
                body: {
                  id: "panelsStayOpen-collapseOne",
                  class: "accordion-collapse collapse show",
                  ariaLabelledby: "panelsStayOpen-headingOne",
                },
              },
              question: "Q.Who are the instructors for the Super TET 2024 online course?",
              answer:
                "Our experienced educators are qualified professionals dedicated to providing high-quality teacher training in the online format.",
            },
  
            {
              accordion: {
                head: {
                  id: "panelsStayOpen-headingTwo",
                  button: {
                    class: "accordion-button",
                    dataBsTarget: "#panelsStayOpen-collapseTwo",
                    ariaExpanded: "false",
                    ariaControls: "panelsStayOpen-collapseTwo",
                  },
                },
                body: {
                  id: "panelsStayOpen-collapseTwo",
                  class: "accordion-collapse collapse",
                  ariaLabelledby: "panelsStayOpen-headingTwo",
                },
              },
              question: "Q.Is study material provided for the Super TET 2024 online course?",
              answer:
                "Yes, you'll receive comprehensive online study materials designed for easy understanding, covering all aspects of the Super TET exam.",
            },
            {
              accordion: {
                head: {
                  id: "panelsStayOpen-headingThree",
                  button: {
                    class: "accordion-button",
                    dataBsTarget: "#panelsStayOpen-collapseThree",
                    ariaExpanded: "false",
                    ariaControls: "panelsStayOpen-collapseThree",
                  },
                },
                body: {
                  id: "panelsStayOpen-collapseThree",
                  class: "accordion-collapse collapse",
                  ariaLabelledby: "panelsStayOpen-headingThree",
                },
              },
              question: "Q.What is the fee structure for the Super TET 2024 Mastery Program online?",
              answer:
                "Connect with us for detailed online fee information and exclusive offers available for a limited time.",
            },
            {
              accordion: {
                head: {
                  id: "panelsStayOpen-headingFour",
                  button: {
                    class: "accordion-button",
                    dataBsTarget: "#panelsStayOpen-collapseFour",
                    ariaExpanded: "false",
                    ariaControls: "panelsStayOpen-collapseFour",
                  },
                },
                body: {
                  id: "panelsStayOpen-collapseFour",
                  class: "accordion-collapse collapse",
                  ariaLabelledby: "panelsStayOpen-headingFour",
                },
              },
              question: "Q.How are the online classes scheduled for the Super TET 2024 course?",
              answer:
                "Choose from morning, afternoon, or evening online sessions to fit your schedule seamlessly and make teacher training accessible from the comfort of your home.",
            },
            {
              accordion: {
                head: {
                  id: "panelsStayOpen-headingFive",
                  button: {
                    class: "accordion-button",
                    dataBsTarget: "#panelsStayOpen-collapseFive",
                    ariaExpanded: "false",
                    ariaControls: "panelsStayOpen-collapseFive",
                  },
                },
                body: {
                  id: "panelsStayOpen-collapseFive",
                  class: "accordion-collapse collapse",
                  ariaLabelledby: "panelsStayOpen-headingFive",
                },
              },
              question: "Q.What sets Education Academy apart in UPTET online preparation?",
              answer:
                "Our experienced online educators, interactive learning approach, personalized attention, and comprehensive curriculum make us the ideal choice for Super TET preparation. Join us to excel in Super TET 2024 and pave the way for a successful teaching career!",
            },
          ],
        },
  
        buyCard: {
          imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
          title: "Special Discount Price",
          prices: {
            discountedPrice: "RS 2449",
            regularPrice: "RS 2999",
            discountPercentage: "17% OFF",
          },
          button: {
            link: "#",
            buttonText: "Buy Now",
          },
        },
    },
    {
        courseId: "super-tet-offline",
        title: "Super TET 2024 Mastery Program (Offline)",
        discountText: "Special Discounted Price",
        price: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "(17% OFF)",
        },
        content: [
          "Limited Seats - Enroll Today!",
  
          "Begin your journey towards becoming a certified teacher with our UPTET 2024 Mastery Program at Education Academy. Tailored to meet the specific requirements of the Uttar Pradesh Teacher Eligibility Test (UPTET), this program provides aspiring teachers with the knowledge and skills needed to excel.",
          
          "Program Highlights:",
          
          "Comprehensive Learning: Dive into the UPTET 2024 syllabus, covering Child Development & Pedagogy, Language I & II, Mathematics, and Environmental Studies/Social Studies.",
          
          "Experienced Instructors: Learn from experienced educators who specialize in their subjects, delivering insightful guidance and strategies for effective teaching.",
          
          "Interactive Sessions: Engage in live discussions, interactive sessions, and teaching methodologies to enhance your understanding of child development and improve your teaching techniques.",
          
          "Mock Tests: Regular mock tests simulate UPTET exam conditions, aiding in time management and evaluating your preparation level effectively.",
          
          "Personalized Support: Benefit from small class sizes for personalized attention and focused guidance, ensuring effective teacher training.",
          
          "Comprehensive Study Materials: Receive carefully crafted study materials curated by our expert faculty, covering the latest teaching methodologies and educational trends specific to UPTET.",
          
          "Emphasis on Teaching Fundamentals: Focus on building a strong foundation in teaching fundamentals, preparing you for both Paper I and Paper II of the UPTET exam.",   
  
        ],
        batchDetails: {
          title: "Batch Details",
          items: [
            { count: "Morning Batch", description: "9:00AM to 12:00" },
            { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
            { count: "Evening Batch", description: "4:00PM to 7:00PM" },
          ],
        },
        faculty: {
          title: "Our Faculties",
          items: [
            {
              name: "Ram Singh",
              qualification: "MSC in Biochemistry",
              experience: "13 Years",
              imageSrc: "/assets/img/5.course-view/1.faculty.png",
            },
          ],
        },
        faq: {
          title: "FAQ",
          items: [
            {
              accordion: {
                head: {
                  id: "panelsStayOpen-headingOne",
                  button: {
                    class: "accordion-button",
                    dataBsTarget: "#panelsStayOpen-collapseOne",
                    ariaExpanded: "false",
                    ariaControls: "panelsStayOpen-collapseOne",
                  },
                },
                body: {
                  id: "panelsStayOpen-collapseOne",
                  class: "accordion-collapse collapse show",
                  ariaLabelledby: "panelsStayOpen-headingOne",
                },
              },
              question: "Q.Do you provide assistance for job placement after completing the Super TET program?",
              answer:
                "Yes, we offer career guidance and assistance in job placement opportunities for our successful candidates.",
            },
  
            {
              accordion: {
                head: {
                  id: "panelsStayOpen-headingTwo",
                  button: {
                    class: "accordion-button",
                    dataBsTarget: "#panelsStayOpen-collapseTwo",
                    ariaExpanded: "false",
                    ariaControls: "panelsStayOpen-collapseTwo",
                  },
                },
                body: {
                  id: "panelsStayOpen-collapseTwo",
                  class: "accordion-collapse collapse",
                  ariaLabelledby: "panelsStayOpen-headingTwo",
                },
              },
              question: "Q. Is there any provision for scholarship programs for economically disadvantaged students?",
              answer:
                "Yes, we have scholarship programs available. Please inquire with our admissions team for more information and eligibility criteria.",
            },
            {
              accordion: {
                head: {
                  id: "panelsStayOpen-headingThree",
                  button: {
                    class: "accordion-button",
                    dataBsTarget: "#panelsStayOpen-collapseThree",
                    ariaExpanded: "false",
                    ariaControls: "panelsStayOpen-collapseThree",
                  },
                },
                body: {
                  id: "panelsStayOpen-collapseThree",
                  class: "accordion-collapse collapse",
                  ariaLabelledby: "panelsStayOpen-headingThree",
                },
              },
              question: "Q.What support do you offer for candidates who require additional help with certain subjects?",
              answer:
                "Our instructors provide extra tutoring sessions and personalized assistance to help students grasp difficult concepts and subjects.",
            },
            {
              accordion: {
                head: {
                  id: "panelsStayOpen-headingFour",
                  button: {
                    class: "accordion-button",
                    dataBsTarget: "#panelsStayOpen-collapseFour",
                    ariaExpanded: "false",
                    ariaControls: "panelsStayOpen-collapseFour",
                  },
                },
                body: {
                  id: "panelsStayOpen-collapseFour",
                  class: "accordion-collapse collapse",
                  ariaLabelledby: "panelsStayOpen-headingFour",
                },
              },
              question: "Q.Can I switch to a different batch schedule if my availability changes?",
              answer:
                "Yes, we offer flexibility in batch schedules. You can request a switch to a different batch based on availability.",
            },
            {
              accordion: {
                head: {
                  id: "panelsStayOpen-headingFive",
                  button: {
                    class: "accordion-button",
                    dataBsTarget: "#panelsStayOpen-collapseFive",
                    ariaExpanded: "false",
                    ariaControls: "panelsStayOpen-collapseFive",
                  },
                },
                body: {
                  id: "panelsStayOpen-collapseFive",
                  class: "accordion-collapse collapse",
                  ariaLabelledby: "panelsStayOpen-headingFive",
                },
              },
              question: "Q.Is there any provision for installment payments for the course fees?",
              answer:
                "Yes, we offer installment payment options. Please contact our administration for further details and arrangements.",
            },
          ],
        },
  
        buyCard: {
          imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
          title: "Special Discount Price",
          prices: {
            discountedPrice: "RS 2449",
            regularPrice: "RS 2999",
            discountPercentage: "17% OFF",
          },
          button: {
            link: "#",
            buttonText: "Buy Now",
          },
        },
    },

//NDA
  {
      courseId: "nda-online",
      title: "NDA 2024 Mastery Program (Online)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Embark on the journey towards a prestigious career in the armed forces with our NDA 2024 Mastery Program online at Education Academy. Tailored specifically for the National Defence Academy (NDA) entrance exam, this program equips aspirants with the knowledge and skills necessary to ace the examination and fulfill their aspirations of serving the nation.",

"Comprehensive Online Learning: Dive deep into the NDA 2024 syllabus online, covering Mathematics, General Ability Test (English, General Knowledge, and Physics, Chemistry, General Science), and Psychological Tests.",

"Experienced Online Instructors: Learn from seasoned educators who specialize in their subjects, providing expert guidance and strategies for effective preparation in the online learning environment.",

"Interactive Online Sessions: Engage in live discussions, interactive sessions, and problem-solving exercises online to enhance your understanding and boost confidence.",

"Online Mock Tests: Regular online mock tests simulate NDA exam conditions, helping you assess your progress, identify areas of improvement, and refine exam strategies.",

"Personalized Online Support: Benefit from small online class sizes for personalized attention and guidance from instructors, ensuring effective exam preparation.",

"Online Study Materials: Receive comprehensive study materials online, meticulously curated by our expert faculty, covering all aspects of the NDA exam and updated according to the latest exam patterns.",

"Focus on Mental Aptitude: Emphasis on developing mental aptitude and analytical skills through specialized training to excel in the Psychological Tests section.",

      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.Who are the instructors for the NDA 2024 online course?",
            answer:
              "Our experienced instructors are seasoned professionals dedicated to providing high-quality training for NDA aspirants in the online format..",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Is there study material provided for the NDA 2024 online course?",
            answer:
              "Yes, comprehensive online study materials are provided, covering all subjects and topics relevant to the NDA exam.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.What is the fee structure for the NDA 2024 Mastery Program online?",
            answer:
              "Contact us for detailed fee information and special offers available for a limited time.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.How are the online classes scheduled for the NDA 2024 course?",
            answer:
              "Choose from morning, afternoon, or evening sessions to accommodate your schedule and ensure convenient access to training.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.What sets Education Academy apart in NDA online preparation?",
            answer:
              "Our experienced instructors, interactive learning approach, personalized support, and comprehensive curriculum make us the preferred choice for NDA preparation. Join us online to excel in NDA 2024 and embark on a rewarding career in the armed forces!",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
  },
  {
      courseId: "nda-offline",
      title: "NDA 2024 Mastery Program (Offline)",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
"Join our NDA 2024 Mastery Program at Education Academy and pave the way for a prestigious career in the armed forces. Tailored specifically for the National Defence Academy (NDA) entrance exam, this program equips aspirants with the knowledge and skills necessary to excel in the examination and fulfill their aspirations of serving the nation.",

"Comprehensive Learning: Delve deep into the NDA 2024 syllabus, covering Mathematics, General Ability Test (English, General Knowledge), and Psychological Tests.",

"Experienced Instructors: Learn from seasoned educators who specialize in their subjects, providing expert guidance and strategies for effective preparation.",

"Interactive Sessions: Engage in live discussions, interactive sessions, and problem-solving exercises to enhance your understanding and boost confidence.",

"Mock Tests: Regular mock tests simulate NDA exam conditions, helping you assess your progress, identify areas of improvement, and refine exam strategies.",

"Personalized Support: Benefit from small class sizes for personalized attention and guidance from instructors, ensuring effective exam preparation.",

"Comprehensive Study Materials: Receive comprehensive study materials meticulously curated by our expert faculty, covering all aspects of the NDA exam and updated according to the latest exam patterns.",

"Focus on Mental Aptitude: Emphasis on developing mental aptitude and analytical skills through specialized training to excel in the Psychological Tests section.",

      ],
      batchDetails: {
        title: "Batch Details",
        items: [
          { count: "Morning Batch", description: "9:00AM to 12:00" },
          { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
          { count: "Evening Batch", description: "4:00PM to 7:00PM" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Q.Who are the instructors for the NDA 2024 offline course?",
            answer:
              "Our experienced instructors are seasoned professionals dedicated to providing high-quality training for NDA aspirants.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Is there study material provided for the NDA 2024 offline course?",
            answer:
              "Yes, comprehensive study materials are provided, covering all subjects and topics relevant to the NDA exam.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingThree",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseThree",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseThree",
                },
              },
              body: {
                id: "panelsStayOpen-collapseThree",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingThree",
              },
            },
            question: "Q.What is the fee structure for the NDA 2024 Mastery Program offline?",
            answer:
              "Contact us for detailed fee information and special offers available for a limited time.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFour",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFour",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFour",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFour",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFour",
              },
            },
            question: "Q.How are the classes scheduled for the NDA 2024 course?",
            answer:
              "Choose from morning, afternoon, or evening batches to accommodate your schedule and ensure convenient access to training.",
          },
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingFive",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseFive",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseFive",
                },
              },
              body: {
                id: "panelsStayOpen-collapseFive",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingFive",
              },
            },
            question: "Q.What sets Education Academy apart in NDA offline preparation?",
            answer:
              "Our experienced instructors, interactive learning approach, personalized support, and comprehensive curriculum make us the preferred choice for NDA preparation. Join us to excel in NDA 2024 and embark on a rewarding career in the armed forces!",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
  },

  //CDS
{
    courseId: "cds-online",
    title: "CDS 2024 Mastery Program (Online)",
    discountText: "Special Discounted Price",
    price: {
      discountedPrice: "RS 2449",
      regularPrice: "RS 2999",
      discountPercentage: "(17% OFF)",
    },
    content: [
"Embark on the journey towards a distinguished career in the armed forces with our CDS 2024 Mastery Program online at Education Academy. Tailored specifically for the Combined Defence Services (CDS) examination, this program equips aspirants with the knowledge and skills necessary to excel in the examination and serve the nation with honor.",

"Comprehensive Online Learning: Delve into the CDS 2024 syllabus online, covering English, General Knowledge, and Elementary Mathematics.",

"Expert Online Instructors: Learn from seasoned educators who specialize in their subjects, providing expert guidance and strategies for effective preparation in the online learning environment.",

"Interactive Online Sessions: Engage in live discussions, interactive sessions, and problem-solving exercises online to enhance your understanding and boost confidence.",

"Online Mock Tests: Regular online mock tests simulate CDS exam conditions, helping you assess your progress, identify areas of improvement, and refine exam strategies.",

"Personalized Online Support: Benefit from small online class sizes for personalized attention and guidance from instructors, ensuring effective exam preparation.",

"Comprehensive Study Materials: Receive comprehensive study materials meticulously curated by our expert faculty, covering all aspects of the CDS exam and updated according to the latest exam patterns.",

"Emphasis on Time Management: Focus on developing time management skills and exam strategies to effectively tackle the CDS examination within the stipulated time frame.",

    ],
    batchDetails: {
      title: "Batch Details",
      items: [
        { count: "Morning Batch", description: "9:00AM to 12:00" },
        { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
        { count: "Evening Batch", description: "4:00PM to 7:00PM" },
      ],
    },
    faculty: {
      title: "Our Faculties",
      items: [
        {
          name: "Ram Singh",
          qualification: "MSC in Biochemistry",
          experience: "13 Years",
          imageSrc: "/assets/img/5.course-view/1.faculty.png",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          accordion: {
            head: {
              id: "panelsStayOpen-headingOne",
              button: {
                class: "accordion-button",
                dataBsTarget: "#panelsStayOpen-collapseOne",
                ariaExpanded: "false",
                ariaControls: "panelsStayOpen-collapseOne",
              },
            },
            body: {
              id: "panelsStayOpen-collapseOne",
              class: "accordion-collapse collapse show",
              ariaLabelledby: "panelsStayOpen-headingOne",
            },
          },
          question: "Q.Who are the instructors for the CDS 2024 online course?",
          answer:
            "Our experienced instructors are seasoned professionals dedicated to providing high-quality training for CDS aspirants in the online format.",
        },

        {
          accordion: {
            head: {
              id: "panelsStayOpen-headingTwo",
              button: {
                class: "accordion-button",
                dataBsTarget: "#panelsStayOpen-collapseTwo",
                ariaExpanded: "false",
                ariaControls: "panelsStayOpen-collapseTwo",
              },
            },
            body: {
              id: "panelsStayOpen-collapseTwo",
              class: "accordion-collapse collapse",
              ariaLabelledby: "panelsStayOpen-headingTwo",
            },
          },
          question: "Q.Is there study material provided for the CDS 2024 online course?",
          answer:
            "Yes, comprehensive online study materials are provided, covering all subjects and topics relevant to the CDS exam.",
        },
        {
          accordion: {
            head: {
              id: "panelsStayOpen-headingThree",
              button: {
                class: "accordion-button",
                dataBsTarget: "#panelsStayOpen-collapseThree",
                ariaExpanded: "false",
                ariaControls: "panelsStayOpen-collapseThree",
              },
            },
            body: {
              id: "panelsStayOpen-collapseThree",
              class: "accordion-collapse collapse",
              ariaLabelledby: "panelsStayOpen-headingThree",
            },
          },
          question: "Q.What is the fee structure for the CDS 2024 Mastery Program online?",
          answer:
            "Contact us for detailed fee information and special offers available for a limited time.",
        },
        {
          accordion: {
            head: {
              id: "panelsStayOpen-headingFour",
              button: {
                class: "accordion-button",
                dataBsTarget: "#panelsStayOpen-collapseFour",
                ariaExpanded: "false",
                ariaControls: "panelsStayOpen-collapseFour",
              },
            },
            body: {
              id: "panelsStayOpen-collapseFour",
              class: "accordion-collapse collapse",
              ariaLabelledby: "panelsStayOpen-headingFour",
            },
          },
          question: "Q.What sets Education Academy apart in CDS online preparation?",
          answer:
            "Our experienced instructors, interactive learning approach, personalized support, and comprehensive curriculum make us the preferred choice for CDS preparation. Join us to excel in CDS 2024 and serve the nation with pride!",
        },
        {
          accordion: {
            head: {
              id: "panelsStayOpen-headingFive",
              button: {
                class: "accordion-button",
                dataBsTarget: "#panelsStayOpen-collapseFive",
                ariaExpanded: "false",
                ariaControls: "panelsStayOpen-collapseFive",
              },
            },
            body: {
              id: "panelsStayOpen-collapseFive",
              class: "accordion-collapse collapse",
              ariaLabelledby: "panelsStayOpen-headingFive",
            },
          },
          question: "Q.What sets Education Academy apart in NDA online preparation?",
          answer:
            "Our experienced instructors, interactive learning approach, personalized support, and comprehensive curriculum make us the preferred choice for NDA preparation. Join us online to excel in NDA 2024 and embark on a rewarding career in the armed forces!",
        },
      ],
    },

    buyCard: {
      imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
      title: "Special Discount Price",
      prices: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "17% OFF",
      },
      button: {
        link: "#",
        buttonText: "Buy Now",
      },
    },
},
{
    courseId: "cds-offline",
    title: "CDS 2024 Mastery Program (Offline)",
    discountText: "Special Discounted Price",
    price: {
      discountedPrice: "RS 2449",
      regularPrice: "RS 2999",
      discountPercentage: "(17% OFF)",
    },
    content: [
      "Join our CDS 2024 Mastery Program at Education Academy and embark on the path to a distinguished career in the armed forces. Tailored specifically for the Combined Defence Services (CDS) examination, this program equips aspirants with the knowledge and skills necessary to excel in the examination and serve the nation with honor.",

      "Comprehensive Learning: Delve into the CDS 2024 syllabus, covering English, General Knowledge, and Elementary Mathematics.",
      
      "Experienced Instructors: Learn from seasoned educators who specialize in their subjects, providing expert guidance and strategies for effective preparation.",
      
      "Interactive Sessions: Engage in live discussions, interactive sessions, and problem-solving exercises to enhance your understanding and boost confidence.",
      
      "Mock Tests: Regular mock tests simulate CDS exam conditions, helping you assess your progress, identify areas of improvement, and refine exam strategies.",
      
      "Personalized Support: Benefit from small class sizes for personalized attention and guidance from instructors, ensuring effective exam preparation.",
      
      "Comprehensive Study Materials: Receive comprehensive study materials meticulously curated by our expert faculty, covering all aspects of the CDS exam and updated according to the latest exam patterns.",
      
      "Emphasis on Time Management: Focus on developing time management skills and exam strategies to effectively tackle the CDS examination within the stipulated time frame.",

    ],
    batchDetails: {
      title: "Batch Details",
      items: [
        { count: "Morning Batch", description: "9:00AM to 12:00" },
        { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
        { count: "Evening Batch", description: "4:00PM to 7:00PM" },
      ],
    },
    faculty: {
      title: "Our Faculties",
      items: [
        {
          name: "Ram Singh",
          qualification: "MSC in Biochemistry",
          experience: "13 Years",
          imageSrc: "/assets/img/5.course-view/1.faculty.png",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          accordion: {
            head: {
              id: "panelsStayOpen-headingOne",
              button: {
                class: "accordion-button",
                dataBsTarget: "#panelsStayOpen-collapseOne",
                ariaExpanded: "false",
                ariaControls: "panelsStayOpen-collapseOne",
              },
            },
            body: {
              id: "panelsStayOpen-collapseOne",
              class: "accordion-collapse collapse show",
              ariaLabelledby: "panelsStayOpen-headingOne",
            },
          },
          question: "Q.Who are the instructors for the CDS 2024 offline course?",
          answer:
            "Our experienced instructors are seasoned professionals dedicated to providing high-quality training for CDS aspirants.",
        },

        {
          accordion: {
            head: {
              id: "panelsStayOpen-headingTwo",
              button: {
                class: "accordion-button",
                dataBsTarget: "#panelsStayOpen-collapseTwo",
                ariaExpanded: "false",
                ariaControls: "panelsStayOpen-collapseTwo",
              },
            },
            body: {
              id: "panelsStayOpen-collapseTwo",
              class: "accordion-collapse collapse",
              ariaLabelledby: "panelsStayOpen-headingTwo",
            },
          },
          question: "Q. Is there study material provided for the CDS 2024 offline course?",
          answer:
            "Yes, comprehensive study materials are provided, covering all subjects and topics relevant to the CDS exam.",
        },
        {
          accordion: {
            head: {
              id: "panelsStayOpen-headingThree",
              button: {
                class: "accordion-button",
                dataBsTarget: "#panelsStayOpen-collapseThree",
                ariaExpanded: "false",
                ariaControls: "panelsStayOpen-collapseThree",
              },
            },
            body: {
              id: "panelsStayOpen-collapseThree",
              class: "accordion-collapse collapse",
              ariaLabelledby: "panelsStayOpen-headingThree",
            },
          },
          question: "Q.What is the fee structure for the NDA 2024 Mastery Program offline?",
          answer:
            "Contact us for detailed fee information and special offers available for a limited time.",
        },
        {
          accordion: {
            head: {
              id: "panelsStayOpen-headingFour",
              button: {
                class: "accordion-button",
                dataBsTarget: "#panelsStayOpen-collapseFour",
                ariaExpanded: "false",
                ariaControls: "panelsStayOpen-collapseFour",
              },
            },
            body: {
              id: "panelsStayOpen-collapseFour",
              class: "accordion-collapse collapse",
              ariaLabelledby: "panelsStayOpen-headingFour",
            },
          },
          question: "Q. How are the classes scheduled for the CDS 2024 course?",
          answer:
            "Choose from morning, afternoon, or evening batches to accommodate your schedule and ensure convenient access to training.",
        },
        {
          accordion: {
            head: {
              id: "panelsStayOpen-headingFive",
              button: {
                class: "accordion-button",
                dataBsTarget: "#panelsStayOpen-collapseFive",
                ariaExpanded: "false",
                ariaControls: "panelsStayOpen-collapseFive",
              },
            },
            body: {
              id: "panelsStayOpen-collapseFive",
              class: "accordion-collapse collapse",
              ariaLabelledby: "panelsStayOpen-headingFive",
            },
          },
          question: "Q.What sets Education Academy apart in CDS offline preparation?",
          answer:
            "Our experienced instructors, interactive learning approach, personalized support, and comprehensive curriculum make us the preferred choice for CDS preparation. Join us to excel in CDS 2024 and serve the nation with pride!",
        },
      ],
    },

    buyCard: {
      imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
      title: "Special Discount Price",
      prices: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "17% OFF",
      },
      button: {
        link: "#",
        buttonText: "Buy Now",
      },
    },
},

//SI Police
{
  courseId: "cds-online",
  title: "CDS 2024 Mastery Program (Online)",
  discountText: "Special Discounted Price",
  price: {
    discountedPrice: "RS 2449",
    regularPrice: "RS 2999",
    discountPercentage: "(17% OFF)",
  },
  content: [
"Embark on the journey towards a distinguished career in the armed forces with our CDS 2024 Mastery Program online at Education Academy. Tailored specifically for the Combined Defence Services (CDS) examination, this program equips aspirants with the knowledge and skills necessary to excel in the examination and serve the nation with honor.",

"Comprehensive Online Learning: Delve into the CDS 2024 syllabus online, covering English, General Knowledge, and Elementary Mathematics.",

"Expert Online Instructors: Learn from seasoned educators who specialize in their subjects, providing expert guidance and strategies for effective preparation in the online learning environment.",

"Interactive Online Sessions: Engage in live discussions, interactive sessions, and problem-solving exercises online to enhance your understanding and boost confidence.",

"Online Mock Tests: Regular online mock tests simulate CDS exam conditions, helping you assess your progress, identify areas of improvement, and refine exam strategies.",

"Personalized Online Support: Benefit from small online class sizes for personalized attention and guidance from instructors, ensuring effective exam preparation.",

"Comprehensive Study Materials: Receive comprehensive study materials meticulously curated by our expert faculty, covering all aspects of the CDS exam and updated according to the latest exam patterns.",

"Emphasis on Time Management: Focus on developing time management skills and exam strategies to effectively tackle the CDS examination within the stipulated time frame.",

  ],
  batchDetails: {
    title: "Batch Details",
    items: [
      { count: "Morning Batch", description: "9:00AM to 12:00" },
      { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
      { count: "Evening Batch", description: "4:00PM to 7:00PM" },
    ],
  },
  faculty: {
    title: "Our Faculties",
    items: [
      {
        name: "Ram Singh",
        qualification: "MSC in Biochemistry",
        experience: "13 Years",
        imageSrc: "/assets/img/5.course-view/1.faculty.png",
      },
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        accordion: {
          head: {
            id: "panelsStayOpen-headingOne",
            button: {
              class: "accordion-button",
              dataBsTarget: "#panelsStayOpen-collapseOne",
              ariaExpanded: "false",
              ariaControls: "panelsStayOpen-collapseOne",
            },
          },
          body: {
            id: "panelsStayOpen-collapseOne",
            class: "accordion-collapse collapse show",
            ariaLabelledby: "panelsStayOpen-headingOne",
          },
        },
        question: "Q.Who are the instructors for the CDS 2024 online course?",
        answer:
          "Our experienced instructors are seasoned professionals dedicated to providing high-quality training for CDS aspirants in the online format.",
      },

      {
        accordion: {
          head: {
            id: "panelsStayOpen-headingTwo",
            button: {
              class: "accordion-button",
              dataBsTarget: "#panelsStayOpen-collapseTwo",
              ariaExpanded: "false",
              ariaControls: "panelsStayOpen-collapseTwo",
            },
          },
          body: {
            id: "panelsStayOpen-collapseTwo",
            class: "accordion-collapse collapse",
            ariaLabelledby: "panelsStayOpen-headingTwo",
          },
        },
        question: "Q.Is there study material provided for the CDS 2024 online course?",
        answer:
          "Yes, comprehensive online study materials are provided, covering all subjects and topics relevant to the CDS exam.",
      },
      {
        accordion: {
          head: {
            id: "panelsStayOpen-headingThree",
            button: {
              class: "accordion-button",
              dataBsTarget: "#panelsStayOpen-collapseThree",
              ariaExpanded: "false",
              ariaControls: "panelsStayOpen-collapseThree",
            },
          },
          body: {
            id: "panelsStayOpen-collapseThree",
            class: "accordion-collapse collapse",
            ariaLabelledby: "panelsStayOpen-headingThree",
          },
        },
        question: "Q.What is the fee structure for the CDS 2024 Mastery Program online?",
        answer:
          "Contact us for detailed fee information and special offers available for a limited time.",
      },
      {
        accordion: {
          head: {
            id: "panelsStayOpen-headingFour",
            button: {
              class: "accordion-button",
              dataBsTarget: "#panelsStayOpen-collapseFour",
              ariaExpanded: "false",
              ariaControls: "panelsStayOpen-collapseFour",
            },
          },
          body: {
            id: "panelsStayOpen-collapseFour",
            class: "accordion-collapse collapse",
            ariaLabelledby: "panelsStayOpen-headingFour",
          },
        },
        question: "Q.What sets Education Academy apart in CDS online preparation?",
        answer:
          "Our experienced instructors, interactive learning approach, personalized support, and comprehensive curriculum make us the preferred choice for CDS preparation. Join us to excel in CDS 2024 and serve the nation with pride!",
      },
      {
        accordion: {
          head: {
            id: "panelsStayOpen-headingFive",
            button: {
              class: "accordion-button",
              dataBsTarget: "#panelsStayOpen-collapseFive",
              ariaExpanded: "false",
              ariaControls: "panelsStayOpen-collapseFive",
            },
          },
          body: {
            id: "panelsStayOpen-collapseFive",
            class: "accordion-collapse collapse",
            ariaLabelledby: "panelsStayOpen-headingFive",
          },
        },
        question: "Q.What sets Education Academy apart in NDA online preparation?",
        answer:
          "Our experienced instructors, interactive learning approach, personalized support, and comprehensive curriculum make us the preferred choice for NDA preparation. Join us online to excel in NDA 2024 and embark on a rewarding career in the armed forces!",
      },
    ],
  },

  buyCard: {
    imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
    title: "Special Discount Price",
    prices: {
      discountedPrice: "RS 2449",
      regularPrice: "RS 2999",
      discountPercentage: "17% OFF",
    },
    button: {
      link: "#",
      buttonText: "Buy Now",
    },
  },
},
{
  courseId: "cds-offline",
  title: "CDS 2024 Mastery Program (Offline)",
  discountText: "Special Discounted Price",
  price: {
    discountedPrice: "RS 2449",
    regularPrice: "RS 2999",
    discountPercentage: "(17% OFF)",
  },
  content: [
    "Join our CDS 2024 Mastery Program at Education Academy and embark on the path to a distinguished career in the armed forces. Tailored specifically for the Combined Defence Services (CDS) examination, this program equips aspirants with the knowledge and skills necessary to excel in the examination and serve the nation with honor.",

    "Comprehensive Learning: Delve into the CDS 2024 syllabus, covering English, General Knowledge, and Elementary Mathematics.",
    
    "Experienced Instructors: Learn from seasoned educators who specialize in their subjects, providing expert guidance and strategies for effective preparation.",
    
    "Interactive Sessions: Engage in live discussions, interactive sessions, and problem-solving exercises to enhance your understanding and boost confidence.",
    
    "Mock Tests: Regular mock tests simulate CDS exam conditions, helping you assess your progress, identify areas of improvement, and refine exam strategies.",
    
    "Personalized Support: Benefit from small class sizes for personalized attention and guidance from instructors, ensuring effective exam preparation.",
    
    "Comprehensive Study Materials: Receive comprehensive study materials meticulously curated by our expert faculty, covering all aspects of the CDS exam and updated according to the latest exam patterns.",
    
    "Emphasis on Time Management: Focus on developing time management skills and exam strategies to effectively tackle the CDS examination within the stipulated time frame.",

  ],
  batchDetails: {
    title: "Batch Details",
    items: [
      { count: "Morning Batch", description: "9:00AM to 12:00" },
      { count: "Afternoon Batch", description: "12:00 to 3:00PM" },
      { count: "Evening Batch", description: "4:00PM to 7:00PM" },
    ],
  },
  faculty: {
    title: "Our Faculties",
    items: [
      {
        name: "Ram Singh",
        qualification: "MSC in Biochemistry",
        experience: "13 Years",
        imageSrc: "/assets/img/5.course-view/1.faculty.png",
      },
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        accordion: {
          head: {
            id: "panelsStayOpen-headingOne",
            button: {
              class: "accordion-button",
              dataBsTarget: "#panelsStayOpen-collapseOne",
              ariaExpanded: "false",
              ariaControls: "panelsStayOpen-collapseOne",
            },
          },
          body: {
            id: "panelsStayOpen-collapseOne",
            class: "accordion-collapse collapse show",
            ariaLabelledby: "panelsStayOpen-headingOne",
          },
        },
        question: "Q.Who are the instructors for the CDS 2024 offline course?",
        answer:
          "Our experienced instructors are seasoned professionals dedicated to providing high-quality training for CDS aspirants.",
      },

      {
        accordion: {
          head: {
            id: "panelsStayOpen-headingTwo",
            button: {
              class: "accordion-button",
              dataBsTarget: "#panelsStayOpen-collapseTwo",
              ariaExpanded: "false",
              ariaControls: "panelsStayOpen-collapseTwo",
            },
          },
          body: {
            id: "panelsStayOpen-collapseTwo",
            class: "accordion-collapse collapse",
            ariaLabelledby: "panelsStayOpen-headingTwo",
          },
        },
        question: "Q. Is there study material provided for the CDS 2024 offline course?",
        answer:
          "Yes, comprehensive study materials are provided, covering all subjects and topics relevant to the CDS exam.",
      },
      {
        accordion: {
          head: {
            id: "panelsStayOpen-headingThree",
            button: {
              class: "accordion-button",
              dataBsTarget: "#panelsStayOpen-collapseThree",
              ariaExpanded: "false",
              ariaControls: "panelsStayOpen-collapseThree",
            },
          },
          body: {
            id: "panelsStayOpen-collapseThree",
            class: "accordion-collapse collapse",
            ariaLabelledby: "panelsStayOpen-headingThree",
          },
        },
        question: "Q.What is the fee structure for the NDA 2024 Mastery Program offline?",
        answer:
          "Contact us for detailed fee information and special offers available for a limited time.",
      },
      {
        accordion: {
          head: {
            id: "panelsStayOpen-headingFour",
            button: {
              class: "accordion-button",
              dataBsTarget: "#panelsStayOpen-collapseFour",
              ariaExpanded: "false",
              ariaControls: "panelsStayOpen-collapseFour",
            },
          },
          body: {
            id: "panelsStayOpen-collapseFour",
            class: "accordion-collapse collapse",
            ariaLabelledby: "panelsStayOpen-headingFour",
          },
        },
        question: "Q. How are the classes scheduled for the CDS 2024 course?",
        answer:
          "Choose from morning, afternoon, or evening batches to accommodate your schedule and ensure convenient access to training.",
      },
      {
        accordion: {
          head: {
            id: "panelsStayOpen-headingFive",
            button: {
              class: "accordion-button",
              dataBsTarget: "#panelsStayOpen-collapseFive",
              ariaExpanded: "false",
              ariaControls: "panelsStayOpen-collapseFive",
            },
          },
          body: {
            id: "panelsStayOpen-collapseFive",
            class: "accordion-collapse collapse",
            ariaLabelledby: "panelsStayOpen-headingFive",
          },
        },
        question: "Q.What sets Education Academy apart in CDS offline preparation?",
        answer:
          "Our experienced instructors, interactive learning approach, personalized support, and comprehensive curriculum make us the preferred choice for CDS preparation. Join us to excel in CDS 2024 and serve the nation with pride!",
      },
    ],
  },

  buyCard: {
    imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
    title: "Special Discount Price",
    prices: {
      discountedPrice: "RS 2449",
      regularPrice: "RS 2999",
      discountPercentage: "17% OFF",
    },
    button: {
      link: "#",
      buttonText: "Buy Now",
    },
  },
},







    
    
  ],
  faculty :[
    {
      facultyId : "01",
      name: "Dr. Manoj Kumar",
      position: "Professor of Mathematics",
      experience: "Experience",
      education: [
          "M.S. in Applied Mathematics, University ABC",
          "B.S. in Mathematics, College DEF"
      ],
      imageSrc: "/assets/img/6.faculties/1.png",
      previousPositions: [
        "Ph.D. in Mathematics, University XYZ",
        "Associate Professor, Department of Mathematics, University XYZ (2010-2018)",
        "Assistant Professor, University ABC",
        "Research interests: Number Theory, Algebraic Geometry",
        "Office Hours: Monday and Wednesday, 2:00 PM - 4:00 PM"
    ],
    bio: "Dr. Emily Johnson is a distinguished mathematician with a passion for advancing the field of pure mathematics. Her research, focusing on Number Theory and Algebraic Geometry, has garnered international recognition. Dr. Johnson brings a wealth of teaching experience, having served as an Associate Professor at University XYZ and an Assistant Professor at University ABC. Her commitment to academic excellence and mentorship has positively impacted numerous students throughout her career. In addition to her teaching and research, Dr. Johnson actively contributes to academic conferences and has published several influential papers in renowned mathematics journals"

  },
  ]
};

// menu items
const menuItems = [  
  { id: "iitjee", text: "IIT", link: "coure-view.html",
  submenu:[  { id: "online-iit", text: "Online", link: "IIT-JEE-2024-Online" },
{ id: "offline-iit", text: "Offline", link: "IIT-JEE-2024-Offline" }] 
},
  
{ id: "neet", text: "NEET", link: "coure-view.html" ,
submenu:[  { id: "online-iit", text: "Online", link: "NEET-2024-Online" },
{ id: "offline-iit", text: "Offline", link: "NEET-2024-Offline" }] 
},


{
  id: "competition",
  text: "COMPETITIVE EXAMS",
  link: "course-view.html",
  submenu: [
    //up police
    {
      id: "up-police",
      text: "UP Police",
      link: "courseview.html",
      submenu2: [
        {
          id: "up-police-online",
          text: "Online",
          link: "UP-Police-2024-Online"
        },
        {
          id: "UP-Police-2024-Offline",
          text: "Offline",
          link: "UP-Police-2024-Offline"
        }
      ]
    },

     // ssc cgl
    {
      id: "ssc-cgl",
      text: "SSC-CGL",
      link: "courseView.html",
      submenu2: [
        {
          id: "ssc-cgl-online",
          text: "Online",
          link: "ssc-cgl-online"
        },
        {
          id: "ssc-cgl-offline",
          text: "Offline",
          link: "ssc-cgl-offline"
        }
      ]
    },

    //ssc gd
    {
      id: "ssc-gd",
      text: "SSS GD",
      link: "courseView.html",
      submenu2: [
        {
          id: "ssc-gd-online",
          text: "Online",
          link: "ssc-gd-online"
        },
        {
          id: "ssc-gd-offline",
          text: "Offline",
          link: "ssc-gd-offline"
        }
      ]
    },
   

    //ctet
    {
      id: "ctet",
      text: "CTET",
      link: "courseView.html",
      submenu2: [
        {
          id: "ctet-online",
          text: "Online",
          link: "ctet-online"
        },
        {
          id: "ctet-offline",
          text: "Offline",
          link: "ctet-offline"
        }
      ]
    },

    //uptet
    {
      id: "uptet",
      text: "UPTET",
      link: "courseView.html",
      submenu2: [
        {
          id: "uptet-online",
          text: "Online",
          link: "uptet-online"
        },
        {
          id: "uptet-offline",
          text: "Offline",
          link: "uptet-offline"
        }
      ]
    },

    // supertet
    {
      id: "super-tet",
      text: "SUPER TET",
      link: "courseView.html",
      submenu2: [
        {
          id: "supertet-online",
          text: "Online",
          link: "courseView.html"
        },
        {
          id: "tet-offline",
          id: "supertet-offline",
          text: "Offline",
          link: "courseView.html"
        }
      ]
    },
   
    
    //nda
    {
      id: "nda",
      text: "NDA",
      link: "courseView.html",
      submenu2: [
        {
          id: "nda-online",
          text: "Online",
          link: "courseView.html"
        },
        {
          id: "super-tet-offline",
          id: "nda-offline",
          text: "Offline",
          link: "courseView.html"
        }
      ]
    },

    // cds
    {
      id: "cds",
      text: "CDS",
      link: "courseView.html",
      submenu2: [
        {
          id: "cds-online",
          text: "Online",
          link: "courseView.html"
        },
        {
          id: "cds-offline",
          text: "Offline",
          link: "courseView.html"
        }
      ]
    },

    // si-police
    {
      id: "si-police",
      text: "S.I POLICE",
      link: "courseView.html",
      submenu2: [
        {
          id: "si-police-online",
          text: "Online",
          link: "courseView.html"
        },
        {
          id: "si-police-offline",
          text: "Offline",
          link: "courseView.html"
        }
      ]
    },

    // bank po
    {
      id: "bank-po",
      text: "BANK PO",
      link: "courseView.html",
      submenu2: [
        {
          id: "bank-po-online",
          text: "Online",
          link: "courseView.html"
        },
        {
          id: "bank-po-offline",
          text: "Offline",
          link: "courseView.html"
        }
      ]
    },

    // upsc
   {
      id: "upsc",
      text: "UPSC",
      link: "courseView.html",
      submenu2: [
        {
          id: "upsc-online",
          text: "Online",
          link: "courseView.html"
        },
        {
          id: "upsc-offline",
          text: "Offline",
          link: "courseView.html"
        }
      ]
    }
    
  ]
},

{
  id: "school",
  text: "SCHOOL",
  link: "course-view.html",
  submenu: [
    {
      id: "class-9th",
      text: "Class 9th",
      link: "courseView.html",
      submenu2: [
        {
          id: "class-9th-online",
          text: "Online",
          link: "courseView.html"
        },
        {
          id: "class-9th-offline",
          text: "Offline",
          link: "courseView.html"
        }
      ]
    }
  ]
}

];

module.exports = { Data, menuItems };
