import "./schedule.css";
import { useEffect } from "react";
import Timer from "../../components/countdownTimer";
import EventDay from "./scheduleComponents/eventDay.tsx";
import event1Image from "../../assets/images/xeniaLogo.png";
import event2Image from "../../assets/images/xeniaLogo.png";
import event3Image from "../../assets/images/xeniaLogo.png";

function Schedule() {
  useEffect(() => {
    document
      .getElementsByClassName("schedule-page-title")[0]
      .addEventListener("mouseover", function (e) {
        var rXP = e.pageX - this.offsetLeft - this.style.width / 2;
        var rYP = e.pageY - this.offsetTop - this.style.height / 2;
        document.getElementsByClassName(
          "schedule-page-title"
        )[0].style.textShadow =
          "(" +
          rYP / 10 +
          "px " +
          rXP / 80 +
          "px rgba(227,6,19,.8), " +
          rYP / 8 +
          "px " +
          rXP / 60 +
          "px rgba(255,237,0,1), " +
          rXP / 70 +
          "px " +
          rYP / 12 +
          "px rgba(0,159,227,.7))";
      });

    var c1 = document.getElementById("c1"),
      w1 = (c1.width = document.body.clientWidth),
      h1 = (c1.height = document.body.clientHeight / 2),
      ctx1 = c1.getContext("2d"),
      opts1 = {
        len: 60,
        count: 50,
        baseTime: 50,
        addedTime: 30,
        dieChance: 0.05,
        spawnChance: 0.1,
        sparkChance: 0.1,
        sparkDist: 10,
        sparkSize: 2,
        color: "hsl(hue,100%,light%)",
        baseLight: 50,
        addedLight: 10, // [50-10,50+10]
        shadowToTimePropMult: 6,
        baseLightInputMultiplier: 0.01,
        addedLightInputMultiplier: 0.02,

        cx: w1 / 2,
        cy: h1 / 2,
        repaintAlpha: 0.04,
        hueChange: 0.1,
      },
      tick1 = 0,
      lines1 = [],
      dieX1 = w1 / 2 / opts1.len,
      dieY1 = h1 / 2 / opts1.len,
      baseRad1 = (Math.PI * 2) / 6;

    // ctx1.fillStyle = 'black';
    // ctx1.fillRect(0, 0, w1, h1);

    function loop1() {
      window.requestAnimationFrame(loop1);
      ++tick1;
      ctx1.globalCompositeOperation = "source-over";
      ctx1.shadowBlur = 0;
      ctx1.fillStyle = "rgba(0,0,0,alp)".replace("alp", opts1.repaintAlpha);
      ctx1.fillRect(0, 0, w1, h1);
      ctx1.globalCompositeOperation = "lighter";

      if (lines1.length < opts1.count && Math.random() < opts1.spawnChance)
        lines1.push(new Line1());

      lines1.map((line) => {
        return line.step();
      });
    }
    function Line1() {
      this.reset();
    }

    Line1.prototype.reset = function () {
      this.x = 0;
      this.y = 0;
      this.addedX = 0;
      this.addedY = 0;

      this.rad = 0;

      this.lightInputMultiplier =
        opts1.baseLightInputMultiplier +
        opts1.addedLightInputMultiplier * Math.random();

      this.color = opts1.color.replace("hue", tick1 * opts1.hueChange);
      this.cumulativeTime = 0;

      this.beginPhase();
    };

    Line1.prototype.beginPhase = function () {
      this.x += this.addedX;
      this.y += this.addedY;

      this.time = 0;
      this.targetTime = (opts1.baseTime + opts1.addedTime * Math.random()) | 0;

      this.rad += baseRad1 * (Math.random() < 0.5 ? 1 : -1);
      this.addedX = Math.cos(this.rad);
      this.addedY = Math.sin(this.rad);

      if (
        Math.random() < opts1.dieChance ||
        this.x > dieX1 ||
        this.x < -dieX1 ||
        this.y > dieY1 ||
        this.y < -dieY1
      )
        this.reset();
    };

    Line1.prototype.step = function () {
      ++this.time;
      ++this.cumulativeTime;

      if (this.time >= this.targetTime) this.beginPhase();

      var prop = this.time / this.targetTime,
        wave = Math.sin((prop * Math.PI) / 2),
        x = this.addedX * wave,
        y = this.addedY * wave;

      ctx1.shadowBlur = prop * opts1.shadowToTimePropMult;
      ctx1.fillStyle = ctx1.shadowColor = this.color.replace(
        "light",
        opts1.baseLight +
          opts1.addedLight *
            Math.sin(this.cumulativeTime * this.lightInputMultiplier)
      );
      ctx1.fillRect(
        opts1.cx + (this.x + x) * opts1.len,
        opts1.cy + (this.y + y) * opts1.len,
        2,
        2
      );

      if (Math.random() < opts1.sparkChance)
        ctx1.fillRect(
          opts1.cx +
            (this.x + x) * opts1.len +
            Math.random() * opts1.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
            opts1.sparkSize / 2,
          opts1.cy +
            (this.y + y) * opts1.len +
            Math.random() * opts1.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
            opts1.sparkSize / 2,
          opts1.sparkSize,
          opts1.sparkSize
        );
    };
    loop1();

    window.addEventListener("resize", function () {
      w1 = c1.width = window.innerWidth;
      h1 = c1.height = window.innerHeight / 2;
      // ctx1.fillStyle = 'black';
      ctx1.fillRect(0, 0, w1, h1);

      opts1.cx = w1 / 2;
      opts1.cy = h1 / 2;

      dieX1 = w1 / 2 / opts1.len;
      dieY1 = h1 / 2 / opts1.len;
    });

    var c2 = document.getElementById("c2"),
      w2 = (c2.width = 700),
      h2 = (c2.height = 1200),
      ctx2 = c2.getContext("2d"),
      opts2 = {
        len: 20,
        count: 50,
        baseTime: 10,
        addedTime: 10,
        dieChance: 0.05,
        spawnChance: 1,
        sparkChance: 0.1,
        sparkDist: 10,
        sparkSize: 2,
        color: "hsl(hue,100%,light%)",
        baseLight: 50,
        addedLight: 10, // [50-10,50+10]
        shadowToTimePropMult: 6,
        baseLightInputMultiplier: 0.01,
        addedLightInputMultiplier: 0.02,

        cx: w2 / 2,
        cy: h2 / 2,
        repaintAlpha: 0.04,
        hueChange: 0.1,
      },
      tick2 = 0,
      lines2 = [],
      dieX2 = w2 / 2 / opts2.len,
      dieY2 = h2 / 2 / opts2.len,
      baseRad2 = (Math.PI * 2) / 6;

    // ctx2.fillStyle = 'black';
    // ctx2.fillRect(0, 0, w2, h2);

    function loop2() {
      window.requestAnimationFrame(loop2);
      ++tick2;
      ctx2.globalCompositeOperation = "source-over";
      ctx2.shadowBlur = 0;
      ctx2.fillStyle = "rgba(0,0,0,alp)".replace("alp", opts2.repaintAlpha);
      ctx2.fillRect(0, 0, w2, h2);
      ctx2.globalCompositeOperation = "lighter";

      if (lines2.length < opts2.count && Math.random() < opts2.spawnChance)
        lines2.push(new Line2());

      lines2.map((line) => {
        return line.step();
      });
    }
    function Line2() {
      this.reset();
    }

    Line2.prototype.reset = function () {
      this.x = 0;
      this.y = 0;
      this.addedX = 0;
      this.addedY = 0;

      this.rad = 0;

      this.lightInputMultiplier =
        opts2.baseLightInputMultiplier +
        opts2.addedLightInputMultiplier * Math.random();

      this.color = opts2.color.replace("hue", tick2 * opts2.hueChange);
      this.cumulativeTime = 0;

      this.beginPhase();
    };

    Line2.prototype.beginPhase = function () {
      this.x += this.addedX;
      this.y += this.addedY;

      this.time = 0;
      this.targetTime = (opts2.baseTime + opts2.addedTime * Math.random()) | 0;

      this.rad += baseRad2 * (Math.random() < 0.5 ? 1 : -1);
      this.addedX = Math.cos(this.rad);
      this.addedY = Math.sin(this.rad);

      if (
        Math.random() < opts2.dieChance ||
        this.x > dieX2 ||
        this.x < -dieX2 ||
        this.y > dieY2 ||
        this.y < -dieY2
      )
        this.reset();
    };

    Line2.prototype.step = function () {
      ++this.time;
      ++this.cumulativeTime;

      if (this.time >= this.targetTime) this.beginPhase();

      var prop = this.time / this.targetTime,
        wave = Math.sin((prop * Math.PI) / 2),
        x = this.addedX * wave,
        y = this.addedY * wave;

      ctx2.shadowBlur = prop * opts2.shadowToTimePropMult;
      ctx2.fillStyle = ctx2.shadowColor = this.color.replace(
        "light",
        opts2.baseLight +
          opts2.addedLight *
            Math.sin(this.cumulativeTime * this.lightInputMultiplier)
      );
      ctx2.fillRect(
        opts2.cx + (this.x + x) * opts2.len,
        opts2.cy + (this.y + y) * opts2.len,
        2,
        2
      );

      if (Math.random() < opts2.sparkChance)
        ctx2.fillRect(
          opts2.cx +
            (this.x + x) * opts2.len +
            Math.random() * opts2.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
            opts2.sparkSize / 2,
          opts2.cy +
            (this.y + y) * opts2.len +
            Math.random() * opts2.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
            opts2.sparkSize / 2,
          opts2.sparkSize,
          opts2.sparkSize
        );
    };
    loop2();

    window.addEventListener("resize", function () {
      w2 = c2.width = window.innerWidth;
      h2 = c2.height = window.innerHeight / 2;
      // ctx2.fillStyle = 'black';
      ctx2.fillRect(0, 0, w2, h2);

      opts2.cx = w2 / 2;
      opts2.cy = h2 / 2;

      dieX2 = w2 / 2 / opts2.len;
      dieY2 = h2 / 2 / opts2.len;
    });

    var c3 = document.getElementById("c3"),
      w3 = (c3.width = 1300),
      h3 = (c3.height = 900),
      ctx3 = c3.getContext("2d"),
      opts3 = {
        len: 80,
        count: 70,
        baseTime: 30,
        addedTime: 30,
        dieChance: 0.5,
        spawnChance: 0.5,
        sparkChance: 0.1,
        sparkDist: 10,
        sparkSize: 2,
        color: "hsl(hue,100%,light%)",
        baseLight: 50,
        addedLight: 10, // [50-10,50+10]
        shadowToTimePropMult: 6,
        baseLightInputMultiplier: 0.01,
        addedLightInputMultiplier: 0.02,

        cx: w3 / 2,
        cy: h3 / 2,
        repaintAlpha: 0.04,
        hueChange: 0.1,
      },
      tick3 = 0,
      lines3 = [],
      dieX3 = w3 / 2 / opts2.len,
      dieY3 = h3 / 2 / opts2.len,
      baseRad3 = (Math.PI * 2) / 6;

    // ctx3.fillStyle = 'black';
    // ctx3.fillRect(0, 0, w3, h3);

    function loop3() {
      window.requestAnimationFrame(loop3);
      ++tick3;
      ctx3.globalCompositeOperation = "source-over";
      ctx3.shadowBlur = 0;
      ctx3.fillStyle = "rgba(0,0,0,alp)".replace("alp", opts3.repaintAlpha);
      ctx3.fillRect(0, 0, w3, h3);
      ctx3.globalCompositeOperation = "lighter";

      if (lines3.length < opts3.count && Math.random() < opts3.spawnChance)
        lines3.push(new Line3());

      lines3.map((line) => {
        return line.step();
      });
    }
    function Line3() {
      this.reset();
    }

    Line3.prototype.reset = function () {
      this.x = 0;
      this.y = 0;
      this.addedX = 0;
      this.addedY = 0;

      this.rad = 0;

      this.lightInputMultiplier =
        opts3.baseLightInputMultiplier +
        opts3.addedLightInputMultiplier * Math.random();

      this.color = opts3.color.replace("hue", tick3 * opts3.hueChange);
      this.cumulativeTime = 0;

      this.beginPhase();
    };

    Line3.prototype.beginPhase = function () {
      this.x += this.addedX;
      this.y += this.addedY;

      this.time = 0;
      this.targetTime = (opts3.baseTime + opts3.addedTime * Math.random()) | 0;

      this.rad += baseRad3 * (Math.random() < 0.5 ? 1 : -1);
      this.addedX = Math.cos(this.rad);
      this.addedY = Math.sin(this.rad);

      if (
        Math.random() < opts3.dieChance ||
        this.x > dieX3 ||
        this.x < -dieX3 ||
        this.y > dieY3 ||
        this.y < -dieY3
      )
        this.reset();
    };

    Line3.prototype.step = function () {
      ++this.time;
      ++this.cumulativeTime;

      if (this.time >= this.targetTime) this.beginPhase();

      var prop = this.time / this.targetTime,
        wave = Math.sin((prop * Math.PI) / 2),
        x = this.addedX * wave,
        y = this.addedY * wave;

      ctx3.shadowBlur = prop * opts3.shadowToTimePropMult;
      ctx3.fillStyle = ctx3.shadowColor = this.color.replace(
        "light",
        opts3.baseLight +
          opts3.addedLight *
            Math.sin(this.cumulativeTime * this.lightInputMultiplier)
      );
      ctx3.fillRect(
        opts3.cx + (this.x + x) * opts3.len,
        opts3.cy + (this.y + y) * opts3.len,
        2,
        2
      );

      if (Math.random() < opts3.sparkChance)
        ctx3.fillRect(
          opts3.cx +
            (this.x + x) * opts3.len +
            Math.random() * opts3.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
            opts3.sparkSize / 2,
          opts3.cy +
            (this.y + y) * opts3.len +
            Math.random() * opts3.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
            opts3.sparkSize / 2,
          opts3.sparkSize,
          opts3.sparkSize
        );
    };
    loop3();

    window.addEventListener("resize", function () {
      w3 = c3.width = window.innerWidth;
      h3 = c3.height = window.innerHeight;
      // ctx2.fillStyle = 'black';
      ctx3.fillRect(0, 0, w3, h3);

      opts3.cx = w3 / 2;
      opts3.cy = h3 / 2;

      dieX3 = w3 / 2 / opts3.len;
      dieY3 = h3 / 2 / opts3.len;
    });
  }, []);

  const eventsSchedule = [
    [
      {
        name: "Event 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event1Image,
      },
      {
        name: "Event 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event2Image,
      },
    ],
    [
      {
        name: "Event 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event1Image,
      },
      {
        name: "Event 4",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event2Image,
      },
      {
        name: "Event 5",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event3Image,
      },
    ],
    [
      {
        name: "Event 6",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event1Image,
      },
      {
        name: "Event 7",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event2Image,
      },
    ],
    [
      {
        name: "Event 7",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event1Image,
      },
      {
        name: "Event 8",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event2Image,
      },
      {
        name: "Event 9",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event3Image,
      },
    ],
  ];

  const renderSchedule = eventsSchedule.map((eventDay, index) => (
    <EventDay key={index + 1} dayNumber={index + 1} eventsArray={eventDay} />
  ));

  return (
    <div className="schedule-page">
      <canvas id="c1" className="c schedule-background-1"></canvas>
      <div className="schedule-page-title">
        <p>COMING SOON</p>
        <Timer />
      </div>
      <canvas id="c2" className="c schedule-background-2"></canvas>
      <div className="events-schedule">{renderSchedule}</div>
      <canvas id="c3" className="c schedule-background-3"></canvas>
    </div>
  );
}

export default Schedule;
