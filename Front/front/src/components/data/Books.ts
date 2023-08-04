import { IBook } from "./models";
export const books = await(
    fetch("index")
    .then((response) => response.text())
    .then((text) => {
        return JSON.parse(text);
    })
);

// export const books:IBook[] =[
// 		{
// 		"id":1,
// 	    "title":"11/22/63",
// 	    "author":"Stephen King",
// 	    "genre":"Fantasy",
// 	    "description":"...The murder of President Kennedy was the most tragic event in the American history of the twentieth century.His secret has not yet been revealed. But what if a miracle happens? If there is an opportunity to go back in time and prevent a catastrophe?\nThis is to be found out by an ordinary teacher from a small town, Jake Epping, who has gained access to a temporary portal.\nHis goal is to save Kennedy. But what will be the price of salvation?",
// 	    "image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81r2cg3nGGe7RD3K8DP80FvHzXPh_UCBlCfipZKIhpq1V2jX2a0zmZhViLkteYaJLuz7POs3qiGwkOEUvfkFWGvDvwAq=w1860-h925",
// 	    "rating":
// 		{
// 		"avgRate":4.5,
// 		"count":10
// 		}
// 		},
// 		{"id":2,
// 		"title":"1984",
// 		"author":"George Orwell",
// 		"genre":"Fantasy",
// 		"description":"1984 is a novel about how the repressive machine of a totalitarian state can destroy any person. Even Smith, who resisted tyranny to the last, eventually gave up. First, he was physically destroyed (in the literal sense of the word - he began to lose his teeth, etc.). Then he finally lost his convictions.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81oeZMSg-wLrRdsX_rJWCBO25p9cQSRms9D6zxhRuzDyFc3pBHzuKrzVGW8ojcaXxXJpkS8BT_NClTWhyfHYyMW-qxRS5g=w1860-h925",
// 		"rating":
// 		{
// 		    "avgRate":4.8,
// 		    "count":10
// 		}
// 		},
// 		{"id":3,
// 		"title":"The Catcher in the Rye",
// 		"author":"Jerome Salinger",
// 		"genre":"Novel",
// 		"description":"The Catcher in the Rye is a story about how Holden tries to establish relationships with other people and fails, which makes him afraid of maturity and cling to an idealized idea of childhood.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81pbN4C_4mof8lkeWPTLIYDQnCfsZp59hxz2PeUWSgcM9MqbA-cw8mfp2ouc6NL0Gr-6wNRl_YxMGtsg0XdoNEVBqU4HhQ=w1860-h925",
// 		"rating":
// 		{
// 		    "avgRate":4.0,
// 		    "count":10
// 		}
// 		},
// 		{"id":4,
// 		"title":"To Kill a Mockingbird",
// 		"author":"Harper Lee",
// 		"genre":"Novel",
// 		"description":"The book reveals many aspects of American society, but the main idea of the novel is to show the world through the eyes of children. The work describes the period of transition from the world of childish kindness and naivety to the harsh adult world of lies and selfishness.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81o91Rv8plsCIPWSey3cTvaC_GjXZzLLxCxY-0jKj5ZQJ0sUv9V_Un9IjJBttS8l9o2iVnA5OaqA_gjiY-dNcie1Kfo_yw=w1860-h925",
// 		"rating":
// 		{
// 		    "avgRate":4.9,
// 		    "count":10
// 		}
// 		},
// 		{"id":5,
// 		"title":"The Hobbit",
// 		"author":"John R. R. Tolkie",
// 		"genre":"Fantasy",
// 		"description":"The plot is based on the journey of the hobbit Bilbo Baggins, the wizard Gandalf and thirteen dwarves led by Thorin Oakenshield. Their way lies to a Lonely Mountain, where dwarven treasures are guarded by the dragon Smaug.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81qE8pf8qwjZl2Elr5UZg86nVnXy1wQSvhUVbg7Gwc3SZGsibphCla5YSS6kY390e4r_T-K2mQwX33r9v7hN9KatAXnBZw=w1860-h925",
// 		"rating":
// 		{
// 		    "avgRate":4.9,
// 		    "count":10
// 		}
// 		},
// 		{"id":6,
// 		"title":"The Great Gatsby",
// 		"author":"Francis Scott Fitzgerald",
// 		"genre":"Novel",
// 		"description":"The novel is set in the jazz era on Long Island, near New York, and tells about the relationship of narrator Nick Carraway in the first person with the mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover Daisy Buchanan.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81oUCCORiR-D2wL-IU-hAteTpi04VyTYLbA2Y6_ffXv4wq-_F8KrwM8Mw5-3axfrNO2mhQQTPGZv-eLFLm0jHiKrDe0N=w1860-h925",
// 		"rating":
// 		{
// 		    "avgRate":5.0,
// 		    "count":10
// 		}
// 		},
// 		{"id":7,
// 		"title":"The Adventures of Sherlock Holmes",
// 		"author":"Arthur Conan Doyle",
// 		"genre":"Detective",
// 		"description":"He is a cold-blooded, reasonable and decent amateur detective. Holmes investigates crimes to avoid boredom. Often he refuses highly paid cases in favor of an interesting case.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81pczh6QuL7hYpzJoKLY1-6MxKdwsTgQttfjIaJfR76IwHktJsKVfFo2awUFxLcvzm5j3D7JZzVGVws0G_FriY0nNGGE_A=w1860-h925",
// 		"rating":
// 		{
// 		    "avgRate":4.4,
// 		    "count":10
// 		}
// 		},
// 		{"id":8,
// 		"title":"Fahrenheit 451",
// 		"author":"Ray Bradbury",
// 		"genre":"Novel",
// 		"description":"In the near future, America's ideas about culture have changed a lot and most of the old carriers of culture, including books, have become illegal. Firefighters monitor compliance with the law.Guy Montag is a firefighter whose task is to burn down houses in which books were found. He loves his job, but secretly takes books from homes that he was supposed to burn.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81rINXhn7emMWPhZAyONqOh_RO8ZmTNNM4rKxJNz6RQQ0GkyWn5hI84cxqhsSp-noHBpOq-B4uli-NsO4t_-LS5QboCEvA=w1860-h925",
// 		"rating":
// 		{
// 			"avgRate":4.2,
// 			"count":10
// 		}
// 		},
// 		{"id":9,
// 		"title":"21 Lessons for the 21st Century",
// 		"author":"Yuval Noah Harari",
// 		"genre":"History",
// 		"description":"How do computers and robots change the meaning of being human? How do we deal with the epidemic of fake news? Are nations and religions still relevant? What should we teach our children? Yuval Noah Harari’s 21 Lessons for the 21st Century is a probing and visionary investigation into today’s most urgent issues as we move into the uncharted territory of the future.",
// 		"image":"https://m.media-amazon.com/images/I/41ea1fBfXrL._SX329_BO1,204,203,200_.jpg",
// 		"rating":
// 		{
// 			"avgRate":4.6,
// 			"count":10
// 		}
// 		},
// 		{"id":10,
// 		"title":"The Immortal Life of Henrietta Lacks",
// 		"author":"Rebecca Skloot",
// 		"genre":"History",
// 		"description":"Her name was Henrietta Lacks, but scientists know her as HeLa. She was a poor Southern tobacco farmer who worked the same land as her slave ancestors, yet her cells—taken without her knowledge—became one of the most important tools in medicine: The first “immortal” human cells grown in culture, which are still alive today, though she has been dead for more than sixty years.",
// 		"image":"https://m.media-amazon.com/images/I/51t8jkeallL._SX282_BO1,204,203,200_.jpg",
// 		"rating":
// 		{
// 			"avgRate":4.6,
// 			"count":10
// 		}
// 		},
// 		{"id":11,
// 		"title":"A History of the World in 6 Glasses",
// 		"author":"Tom Standage",
// 		"genre":"History",
// 		"description":"Beer, wine, spirits, coffee, tea, and Coca-Cola: In Tom Standage's deft, innovative account of world history, these six beverages turn out to be much more than just ways to quench thirst. They also represent six eras that span the course of civilization-from the adoption of agriculture, to the birth of cities, to the advent of globalization.",
// 		"image":"https://m.media-amazon.com/images/I/71y45acTgML.jpg",
// 		"rating":
// 		{
// 			"avgRate":4.5,
// 			"count":10
// 		}
// 		},
// 		{"id":12,
// 		"title":"The World: A Family History of Humanity",
// 		"author":"Simon Sebag Montefiore",
// 		"genre":"History",
// 		"description":"In this epic, ever-surprising book, Montefiore chronicles the world’s great dynasties across human history through palace intrigues, love affairs, and family lives, linking grand themes of war, migration, plague, religion, and technology to the people at the heart of the human drama.",
// 		"image":"https://m.media-amazon.com/images/P/0525659536.01._SCLZZZZZZZ_SX500_.jpg",
// 		"rating":
// 		{
// 			"avgRate":4.4,
// 			"count":10
// 		}
// 		},
// 		{"id":13,
// 		"title":"The Invisible String",
// 		"author":"Patrice Karst",
// 		"genre":"Fairy tale",
// 		"description":"This heartwarming picture book for all ages explores questions about the intangible yet unbreakable connections between us, and opens up deeper conversations about love.",
// 		"image":"https://m.media-amazon.com/images/I/61RZ0yfZi5L._SY498_BO1,204,203,200_.jpg",
// 		"rating":
// 		{
// 			"avgRate":4.8,
// 			"count":10
// 		}
// 		},
// 		{"id":14,
// 		"title":"If You Give a Mouse a Cookie",
// 		"author":"Laura Numeroff",
// 		"genre":"Fairy tale",
// 		"description":"This book is a great first introduction to Mouse, the star of the If You Give... series and a perennial favorite among children. With its spare, rhythmic text and circular tale, If You Give a Mouse a Cookie is perfect for beginning readers and story time. Sure to inspire giggles and requests to read it again!",
// 		"image":"https://m.media-amazon.com/images/P/0060245867.01._SCLZZZZZZZ_SX500_.jpg",
// 		"rating":
// 		{
// 			"avgRate":4.9,
// 			"count":10
// 		}
// 		},
// 		{"id":15,
// 		"title":"The Day the Crayons Quit",
// 		"author":"Drew Daywalt",
// 		"genre":"Fairy tale",
// 		"description":"Poor Duncan just wants to color. But when he opens his box of crayons, he finds only letters, all saying the same thing: His crayons have had enough! They quit! Blue crayon needs a break from coloring all those bodies of water. Black crayon wants to be used for more than just outlining.  And Orange and Yellow are no longer speaking—each believes he is the true color of the sun. What can Duncan possibly do to appease all of the crayons and get them back to doing what they do best?",
// 		"image":"https://m.media-amazon.com/images/P/0399255370.01._SCLZZZZZZZ_SX500_.jpg",
// 		"rating":
// 		{
// 			"avgRate":4.8,
// 			"count":10
// 		}
// 		},
// 		{"id":16,
// 		"title":"If Animals Kissed Good Night",
// 		"author":"Ann Whitford Paul",
// 		"genre":"Fairy tale",
// 		"description":"Giraffe and his calf would stretch their necks high, just beneath the top of the sky. Wolf and pup would kiss and then HOWL, while Bear and cub would kiss and then GROWL! And long after all the other animals have been tucked in tight? Sloth and her baby will still be saying night-night!",
// 		"image":"https://m.media-amazon.com/images/P/0374390193.01._SCLZZZZZZZ_SX500_.jpg",
// 		"rating":
// 		{
// 			"avgRate":4.8,
// 			"count":10
// 		}
// 		},
// 		{"id":17,
// 		"title":"All My Rage: A Novel",
// 		"author":"Sabaa Tahir",
// 		"genre":"Detective",
// 		"description":"Misbah is a dreamer and storyteller, newly married to Toufiq in an arranged match. After their young life is shaken by tragedy, they come to the United States and open the Clouds' Rest Inn Motel, hoping for a new start.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81qwBZpEeNH-V4TQg4AZJbt902BK5eotWggde_mWy3wVEhnkzDEgAkpF_Nfk2YQJry1cVGbKYlQIOW8y5sMGznxE5EDRXQ=w898-h908",
// 		"rating":
// 		{
// 			"avgRate":4.7,
// 			"count":10
// 		}
// 		},
// 		{"id":18,
// 		"title":"Small Mercies: A Novel",
// 		"author":"Dennis Lehane",
// 		"genre":"Detective",
// 		"description":"In the summer of 1974 a heatwave blankets Boston and Mary Pat Fennessy is trying to stay one step ahead of the bill collectors. Mary Pat has lived her entire life in the housing projects of “Southie,” the Irish American enclave that stubbornly adheres to old tradition and stands proudly apart.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81oUqUpt_NhBiwwNSIwLyIp-pb22qBNnOn2PrjauydP1BNdKHW-6j3MQDGnYGHIZ7mwIVFZ3KjHmKEzoD1GGfp04Z59_sQ=w898-h908",
// 		"rating":
// 		{
// 			"avgRate":4.5,
// 			"count":10
// 		}
// 		},
// 		{"id":19,
// 		"title":"Path of Bones: A Cassie Quinn Mystery",
// 		"author":"L.T. Ryan, K.M. Rought",
// 		"genre":"Detective",
// 		"description":"Cassie Quinn, a former medium who communicated with murder victims, finds her peaceful life shattered when a ghost invades her home, forcing her back into the world of the dead to solve a murder and stop a heartless killer before it's too late.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81qQBtWjVoR9mtHKQkc9r9xHkKi4rSCiaW4aaLcbDwnTtWZyyFJ6GAIFwh-rUwCMTpPba4p4tA3meIIoFToAzD0-HHyv=w898-h908",
// 		"rating":
// 		{
// 			"avgRate":4.4,
// 			"count":10
// 		}
// 		},
// 		{"id":20,
// 		"title":"The Violin Conspiracy: A Novel",
// 		"author":"Brendan Slocumb",
// 		"genre":"Detective",
// 		"description":"Ray McMillian, a gifted Black violinist from rural North Carolina, discovers his family fiddle is a priceless Stradivarius, but when it is stolen before the Tchaikovsky Competition, he must recover it and prove his musical greatness.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81oR2hk5EJp-JL7CsUTD6-qLxEbbU4H3xEYu5de8Hj13MShvxcqlOsWSyWuKQ94UfSjds3PsiMIOs1JR3K6WvxhQLpWX5w=w898-h908",
// 		"rating":
// 		{
// 			"avgRate":4.4,
// 			"count":10
// 		}
// 		},
// 		{"id":21,
// 		"title":"Serpentine: An Alex Delaware Novel",
// 		"author":"Jonathan Kellerman",
// 		"genre":"Detective",
// 		"description":"LAPD detective Milo Sturgis and psychologist Alex Delaware join forces to solve a long-cold murder case in Los Angeles, uncovering a web of secrets, coincidences, and present dangers along the way.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81rTJFv8b9GM8VbEez6eMcDvByYbJ_trROXV3FyjQXDqnSjcpgKygq-xyQ_LK0BP7pFu9A4YBpB_XOG_XXFXbEtcFZjsBg=w898-h908",
// 		"rating":
// 		{
// 			"avgRate":4.5,
// 			"count":10
// 		}
// 		},
// 		{"id":22,
// 		"title":"The Red Book",
// 		"author":"James Patterson",
// 		"genre":"Detective",
// 		"description":"Detective Billy Harney faces a week filled with danger and accusations as he investigates a politically-charged drive-by shooting in Chicago, uncovering a conspiracy that goes deeper than he could have imagined, leading him to confront his own troubled past in order to expose the true evil plaguing the city.",
// 		"image":"https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81qjD6bqZC5j_bgPgF1PWcm8xd8Ee2ejzgpx8m5pzyoGZDoXHECWF8GHR5xcXJZnZmdC-crIuLIMry-pjJPO5V8kLXKlKg=w899-h908",
// 		"rating":
// 		{
// 			"avgRate":4.6,
// 			"count":10
// 		}
// 		},

// ];