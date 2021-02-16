<template>
    <section class="section-event-Info" :id="mpEvent.id" :singleEvent="mpEvent">
      <article  class="course" >
        <section class="course-preview">
          <h6>Event meet-up</h6>
          <h2>{{mpEvent.name}}</h2>
          <small> <p class="course-perview-p"> {{mpEvent.Attendees +1}} attendees</p></small>
        </section>
        <section class="course-info">
          <article class="progress-container">
            <p class="progress-p">{{mpEvent.from}} </p>
            <p class="progress-p">{{mpEvent.to}}</p>
            <span class="progress-text">
              {{mpEvent.date}}
            </span>
          </article>
          <h6> Hosted by: <br> {{ mpEvent.HostedBy }}</h6>
          <h3><details> {{mpEvent.Details}} </details></h3><br>
          <p class="accepted">Accepted</p>
        </section>
      </article>
    </section>
</template>

<script>
export default {
  name:'EventInfo',
  props:{
    mpEvent: Object,
  },
  methods:{
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  .section-event-Info{
      background-image: linear-gradient(45deg, #cfcfd8, #ecebf8);
      font-family: 'Muli', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      min-height: 23vh;//36vh;
      margin: 0;

    .course {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
      display: flex;
      max-width: 100%;
      margin: 20px;
      overflow: hidden;
      width: 950px;

      .course-preview {
          background-color: #2A265F;
          color: #fff;
          padding: 30px;
          max-width: 250px;
          width: 23.8rem;

          .course h6 {
            opacity: 0.6;
            margin: 0;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          .course h2 {
            letter-spacing: 1px;
            margin: 10px 0;
          }

          .course-preview .course-perview-p {
              color: #fff;
              display: inline-block;
              font-size: 12px;
              opacity: 0.6;
              margin-top: 30px;
              text-decoration: none;
          }
          
      }
      .course-info {
        padding: 30px;
        position: relative;
        width: 100%;

        .progress-container {
              position: absolute;
              top: 30px;
              right: 30px;
              text-align: right;
              width: 150px;
              display:flex;

            .progress-p{
              flex:1;
            }
            .progress-text {
              font-size: 10px;
              opacity: 0.6;
              letter-spacing: 1px;
            }
        }
        details{
          margin-bottom: 2.5rem;
          cursor: pointer;
        }
        .btn {
          background-color: #2A265F;
          border: 0;
          border-radius: 50px;
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
          color: #fff;
          font-size: 16px;
          padding: 12px 25px;
          position: absolute;
          bottom: 30px;
          right: 30px;
          letter-spacing: 1px;
          cursor: pointer;
        }
        .accepted {
          position: absolute;
          bottom:10px;
          right:10px;
          border: 1px solid;
          border-radius:5px;
          padding:0.4rem;
          background-color:rgba(0, 128, 0, 0.711);
          color:white;
        }
      }

    }
}
</style>