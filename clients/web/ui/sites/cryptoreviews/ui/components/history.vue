<template>
    <div id="history" class="section section--overview">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8">
                    <div class="heading-title mb-0">
                        <h3 class="title tw-5 mb-20">
                            <a href="#history">History</a>
                        </h3>
                        <p class="mb-30 text-center" v-html="content">
                            {{ content }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <ul id="myTab" class="nav nav-tabs mb-4 mt-4" role="tablist">
                        <li class="nav-item mr-10">
                            <a
                                id="eventone-tab"
                                class="nav-link active"
                                data-toggle="tab"
                                href="#eventone"
                                role="tab"
                                aria-controls="eventone"
                                aria-selected="true">2008-2009</a>
                        </li>
                        <li class="nav-item mr-10">
                            <a
                                id="eventwo-tab"
                                class="nav-link"
                                data-toggle="tab"
                                href="#eventwo"
                                role="tab"
                                aria-controls="eventwo"
                                aria-selected="false">2010-2012</a>
                        </li>
                        <li class="nav-item mr-10">
                            <a
                                id="eventhree-tab"
                                class="nav-link"
                                data-toggle="tab"
                                href="#eventhree"
                                role="tab"
                                aria-controls="eventhree"
                                aria-selected="false">2013</a>
                        </li>
                        <li class="nav-item mr-10">
                            <a
                                id="eventfour-tab"
                                class="nav-link"
                                data-toggle="tab"
                                href="#eventfour"
                                role="tab"
                                aria-controls="eventfour"
                                aria-selected="false">2014-2016</a>
                        </li>
                        <li class="nav-item mr-10">
                            <a
                                id="evenfive-tab"
                                class="nav-link"
                                data-toggle="tab"
                                href="#evenfive"
                                role="tab"
                                aria-controls="evenfive"
                                aria-selected="false">2017</a>
                        </li>
                        <li class="nav-item mr-10">
                            <a
                                id="evensix-tab"
                                class="nav-link"
                                data-toggle="tab"
                                href="#evensix"
                                role="tab"
                                aria-controls="evensix"
                                aria-selected="false">2018</a>
                        </li>
                    </ul>
                    <div id="myTabContent" class="tab-content mt-30">
                        <div id="eventone" class="tab-pane fade show active" role="tabpanel" aria-labelledby="eventone-tab">
                            <div class="row">
                                <div class="col-12">
                                    <h3>2008: The Year It All Began</h3>
                                    <br>
                                    <p><strong>August 2008</strong><br>Neil Kin, Vladimir Oksman and Charles Bry apply for an encryption patent application. Not only did they deny any connection to Satoshi Nakamoto, the alleged mastermind behind Bitcoin, but they also registered the site Bitcoin.org in the same month itself, buying the domain name anonymously over anonymousspeech.com</p>
                                    <br>
                                    <p><strong>October 2008</strong><br>Despite Kin, Oksman and Bry trying to sabotage Bitcoin, Nakamoto went ahead to release his white paper which depicted his idea for a purely peer-to peer version of electronic cash. He provided the basic fundamental solution to the problem of virtual money being copied, giving electronic cash like Bitcoin the indispensable foundation to grow legitimately.</p>
                                    <br><br>
                                    <h3>2009: The Rise of Mining</h3>
                                    <br>
                                    <p><strong>January 2009</strong><br>The initial mining of Bitcoins began with the first block ˜Genesis™ being launched. Later in the month, the first transaction took place between Satoshi and Hal Finney who is a developer and a cryptographic artist.</p>
                                    <br>
                                    <p><strong>October 2009</strong><br>BTC received its traditional equivalent of currencies. The New Liberty Standard established the value as 1$ = 1309 BTC. The equation took into consideration the cost of electricity that was required to run the computer that was used to create the bitcoins in the first place.</p>
                                </div>
                            </div>
                        </div>
                        <div id="eventwo" class="tab-pane fade" role="tabpanel" aria-labelledby="eventwo-tab">
                            <div class="row">
                                <div class="col-12">
                                    <h3>2010: The Chaos Theory</h3>
                                    <br>
                                    <p><strong>May 2010</strong><br>Laslo Hanyecz, a programmer from Florida sent 10,000 Bitcoins to a volunteer in England who spent about 25$ to order Hanycez a pizza from Papa John™s. One of the most major milestones in the history of Bitcoin, that pizza is valued at 1,961,034 pounds today.</p>
                                    <br>
                                    <p><strong>August 2010</strong><br>A vulnerability in how the system verifies the value of Bitcoin is discovered and the organization gets hacked out of 184 Billion Bitcoins. The value of the currency that had risen to $1 in June, drops through the floor.</p>
                                    <br>
                                    <p><strong>October 2010</strong><br>Bitcoin is thrown under the negative spotlight with inter-governmental group publishing a report on money laundering using new payment methods. The report was published right after discovering other vulnerabilities in the blockchain in September after the hack in August.</p>
                                    <br>
                                    <p><strong>November 2010</strong><br>BTC reaches the 1 Mil$ mark. Based on the number of Bitcoins in circulation at the time, the valuation leads to a surge in the BTC value to $0.50/BTC.</p>
                                    <br>
                                    <p><strong>January 2011</strong><br>The Silk Road, an illicit drugs marketplace which used Bitcoin as an untraceable way to buy and sell drugs online, is established.</p>
                                    <br>
                                    <p><strong>February 2011</strong><br>Bitcoin reaches parity with the US Dollar, for the first time in its  By June 2011, 1 BTC = $31, giving the currency a market cap of almost 206$ million.</p>
                                </div>
                            </div>
                        </div>
                        <div id="eventhree" class="tab-pane fade" role="tabpanel" aria-labelledby="eventhree-tab">
                            <div class="row">
                                <div class="col-12">
                                    <h3>2013: "Bitcoins Accepted Here"</h3>
                                    <br><br>
                                    <p><strong>June 2013</strong><br>After BTC market capitalization reached an all-time high of $1bn, Bitcoin Forum Founder Allinvain reports having 25,000 BTC stolen from his digital wallet. This marked the first major BTC theft, with a dollar equivalent of $375,000 being stolen at that time.</p>
                                    <br>
                                    <p><strong>August 2013</strong><br>Federal Judge Mazzant backed Bitcoin by saying It is clear that Bitcoin can be used as money to purchase goods and services in a case against Trendon Shavers, the so-called ˜Bernie Madoff™ of Bitcoin.</p>
                                    <br>
                                    <p><strong>November 2013</strong><br>With the US Senate holding its first hearing on the digital currency, the price of BTC escalated to 700$ along with Bitcoin receiving the blessing of Ben Bernanke, the chairman of the Federal Reserve.</p>
                                    <br>
                                    <p><strong>December 2013</strong><br>People™s Bank of China derides the usage of Bitcoin as currency be saying it has no ˜real meaning™ and should not be given the same status as of fiat cash, and subsequently bars Chinese financial institutions from handling BTC transactions.</p>
                                </div>
                            </div>
                        </div>
                        <div id="eventfour" class="tab-pane fade show" role="tabpanel" aria-labelledby="eventfour-tab">
                            <div class="row">
                                <div class="col-12">
                                    <h3>2014: Increments in Storage</h3>
                                    <br>
                                    <p><strong>June 2014</strong><br>Bitcoin can no longer be considered as a Currency for Criminals with the US Govt auctioning off more than 29,000 bitcoins seized from The Silk Road. The use of Bitcoin often means that the identity of the user can be established.</p>
                                    <br>
                                    <p><strong>August 2014</strong><br>George Osborne, the Chancellor of Exchequer, along with HM Treasury established their positive outlook on the BTC with a purchase of 20 pounds worth of Bitcoin and announced HM Treasury™s Call for Information on digital currencies. This offered digital currency businesses the chance to draw attention to the risks, benefits and give them the chance to potentially influence future Government policy.</p>
                                    <br>
                                    <p><strong>December 2014</strong><br>Technology powerhouse Microsoft began accepting Bitcoins as payment. They could be used to buy games and videos on the X-Box, add apps and services to Windows phones or to buy Microsoft software.</p>
                                    <br><br>
                                    <p><strong>Early 2015 - Mid 2016: The Slow and Steady Rise of BTC</strong></p>
                                    <br>
                                    <p>In this one and a half year, BTC slowly scaled up the charts to reach a value close 770$ by the June 2016, where it started with a lowly value 177$ in January 2015. The number of miners, developers associated with Bitcoin grew exponentially in this one and a half year</p>
                                </div>
                            </div>
                        </div>
                        <div id="evenfive" class="tab-pane fade" role="tabpanel" aria-labelledby="evenfive-tab">
                            <div class="row">
                                <div class="col-12">
                                    <h3>2017: The Bitcoin Boom</h3>
                                    <br>
                                    <p>Come 2017 and Bitcoin starts breaking through the glass ceiling. It hit a high of almost 2900$ in the first half of 2017 itself. With Japan introducing new rules for digital currency and China letting down its guard a little, the worldwide demand for digital currency soared, leading to hype-cycle which in turn meant a bigger boom for the Bitcoin industry!</p>
                                    <br><br>
                                    <h3>The birth of Bitcoin Cash</h3>
                                    <br>
                                    <p>August 1 saw the birth of a brand-new cryptocurrency: Bitcoin Cash, sometimes referred to as Bcash and using the currency tickers BCH or BCC.</p>
                                    <br>
                                    <p>Bitcoin Cash, initially defined by the Bitcoin ABC software implementation, was set to fork on August 1 at 12:20 p.m. UTC. Though, because of how Bitcoin nodes measure time, the actual fork happened a little bit later.</p>
                                </div>
                            </div>
                        </div>
                        <div id="evensix" class="tab-pane fade" role="tabpanel" aria-labelledby="evensix-tab">
                            <div class="row">
                                <h3>2018: The Correction</h3>
                                <br clear="both"><br>
                                <p>2019 has been the year of correcting after major ethusiasm.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['content', 'timeline']
}
</script>
