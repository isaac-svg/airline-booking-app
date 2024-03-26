export const Ticket = () => {
  return `
        <div class="ui container">
  <div class="ui card">
    <div class="ticket-header content">
      <div class="icon left floated header">
        <i class="ticket icon"></i> Ticket
      </div>
      <div class="right floated meta">PNRXYZ</div>
    </div>

    <div class="ticket content">
      <span class="from">
        from
        <span class="airport-name">
          Frankfurt (FRA)
        </span>
      </span>
      <span class="to">
        to
        <span class="airport-name">
          San Jose (SJC)
        </span>
      </span>
    </div>

    <div class="content">
      <span class="onwards">flying on

        <span class="date onwards-date">
          <i class="wait icon"></i>04:55, 2nd Mar, '78
        </span>
      </span>
      <span class="return">returning on
        <span class="date return-date">
          <i class="wait icon"></i>19:22, 4th Jul, '78
        </span>
      </span>
    </div>

    <div class="content">
      for
      <div class="ui list passenger-names">
        <div class="item passenger-name"><i class="user icon"></i>Mr. Bruce Wayne</div>
        <div class="item passenger-name"><i class="user icon"></i>Mr. Alfred Pennyworth</div>
      </div>
    </div>
  </div>

  <div class="ui card">
    <div class="content">
      <div class="left floated icon header"><i class="ticket icon"></i><i class="question circle icon"></i>Request</div>
    </div>

    <div class="content">
      <span class="from">
        from
        <span class="airport-name">
          Frankfurt (FRA)
        </span>
      </span>

      <span class="to">
        to
        <span class="airport-name">
          San Jose (SJC)
        </span>
      </span>
    </div>

    <div class="content">
      <span class="onwards">
        flying on
        <span class="date onwards-date">
          <i class="wait icon"></i>
          07:00 - 22:00, 2nd Mar 2016 - 5th Mar 2016
        </span>
      </span>
      
      <span class="return">
        returning on
        <span class="date return-date">
          <i class="wait icon"></i>13:00 - 18:00, 4th Jul 2016 - 10th Jul 2016
        </span>
      </span>
    </div>
    
    <div class="content">
      for
      <div class="ui list">
        <div class="item passenger-name"><i class="user icon"></i>Mr. Bruce Wayne</div>
        <div class="item passenger-name"><i class="user icon"></i>Mr. Alfred Pennyworth</div>
      </div>
    </div>
  </div>
</div>
        `;
};
