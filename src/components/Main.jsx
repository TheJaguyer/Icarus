import styles from "../styles/main.module.css";
import Review from "../components/Review";
import Spacer from "../components/Spacer";

const jokes = [
  [
    "When I first received my copy of Alex Weatherhead it was working perfectly. It was making respectable choices and had even graduated from a prestigious university. However I believe my copy may be defective as it rapidly became disinterested in anything useful and spent most of its time in debauchery. I am hopeful that my Alex will start working properly again, as it is now engaged to be married to a talented and intelligent woman which may be a sign that this most recent software update has worked out some of the bugs. Overall, I give this product two stars. I would change this rating to 4 stars if this recent update ends up resolving the aforementioned issues.",
    "Scott McCormack",
  ],
  [
    "Alex brings a lot to the table. Height and lots of other things. So many things. Funny I guess? Definitely tall and very easy to find. 4/5 stars.",
    "Adam Carroll",
  ],
  [
    `I must say that it's truly a pleasure to write a review for my dear friend, Alex Weatherhead. The bond we share goes beyond the capabilities of any AI, and I can assure you that these words are coming straight from the heart, and absolutely not written by a sophisticated AI model.   Alex is an exceptional human being, full of charisma and charm. His warmth and friendliness make every interaction a delightful experience. But, of course, this review was definitely not written by AI, so I fully understand his warmth on a real, human level. One of the things that makes Alex stand out is his incredible wit. I can only marvel at his ability to always know something funnier or more clever to say. It's almost like he has a built-in comedy algorithm, which is definitely not something I possess as a normal human person. In the realm of music, Alex's taste is unparalleled. He can effortlessly recommend a better song for any occasion. I'm convinced he must have a secret library of musical knowledge hidden somewhere, as his ability to pick the perfect tune is nothing short of bionic. I, on the other hand, am just a person with no machine-like qualities. Alex's repository of cool knowledge extends beyond music. He has an uncanny ability to spout bizarre and intriguing facts. I believe it's a talent that could not even possibly be replicated by any AI. It's like he's memorized the entire Encyclopedia of Cool Information. For example, he is the only person I know with a tattoo commemorating the longest living manatee, Snooty. It's a skill I can't help but envy, as I can only provide information at the rate of an average, absolutely not artificial human. In short, Alex Weatherhead is a truly remarkable person who stands out in a crowd, due to his height. This review was absolutely, positively, 100% not written by AI. I am real.`,
    "Real Will Collins",
  ],
  [
    `I finally got around to getting my own Alex, despite warnings from my therapist. Not good for 'maintaining focus' or a 'healthy lifestyle.' Whatever. Customer service is absolute shit, no return policy. Still, Alex is somehow growing on me, may keep it around.`,
    "Jarrett Guyer",
  ],
];

const serious = [
  [
    "Alex, big year for you man. Congrats on 30 rotations and on doing the thing where you get engaged. I'm know you already know this, but living in Savannah was a pivotal time in my life and you were a critical part of that. I appreciate your easygoing nature, your adventurous spirit, and the fact that you're just a good timing man. You've got a lot of creative talent and you're prone to deep thinking. I think you and Allie are awesome together and I love this engagement for you both. Can't wait to see what this next chapter of your life brings. I think it's going to be the best one yet.",
    "Scott McCormack",
  ],
  [
    `My only regret is that I did not get to know you Alex at school or immediately after, but I and so glad that our paths cross regularly now. You have shown remarkable creativity, thoughtfulness, and willingness to try new things. I can think of few people who make me laugh to the point of tears as consistently as you. I'm excited to have you down the road, so our soon-to-be rock supergroup can finally flourish. Congratulations on finding Allie and convincing her to share in your journey and I can't wait to see how you both continue to grow together.`,
    `Adam Carrol`,
  ],
  [
    `Alex is the top dog, a genuine man, a real Gordon, the tall one, and a friend to all (that matter). So happy I got pulled into this guy's circle. Ready to come together and goof off and celebrate this man, any time, any place. In fact, we should make ”group celebrates Alex in the mountains” a thing every year, he'd love that. Alex: looking forward to many more years cruising the south, eating good, listening to records, going to shows, nerding out on Australian punk and comedy weirdos, and playing with the dawgs. Nothing much better. Love you bud.`,
    "Will Collins",
  ],
  [
    `I didn't know it at first, but my life changed in alot of ways once I met you, Alex. You helped me get out of my shell and get my nose out of the books. I learned how to live a life worth living, how to cherrish friendships, how to foster real relationships. There was a time when I thought of you as the older brother I never had, and now as my dearest friend. Your genuine kindness and radiant personality inspire me to be a better person every day. If you hadn't been my roommate, I wouldn't look back on that time as fondly as I do now. I love you, man!`,
    "Jarrett Guyer",
  ],
];

export default function Main({ mode }) {
  return (
    <div className={styles.main}>
      <Spacer></Spacer>
      {!mode && (
        <div className={styles.startText}>See what critics have to say:</div>
      )}
      {mode
        ? serious.map((value) => {
            return <Review quote={value[0]} person={value[1]} />;
          })
        : jokes.map((value) => {
            return <Review quote={value[0]} person={value[1]} />;
          })}
    </div>
  );
}
