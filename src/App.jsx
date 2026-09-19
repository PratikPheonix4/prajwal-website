import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [activeLink, setActiveLink] = useState('');

  // Handle scroll to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem', 'solution', 'market', 'traction', 'competition', 'business', 'ask', 'founder'];
      let current = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const top = window.scrollY;
          const offsetTop = element.offsetTop - 100; // Adjust for navbar height
          const offsetBottom = offsetTop + element.offsetHeight;

          if (top >= offsetTop && top < offsetBottom) {
            current = section;
          }
        }
      });

      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with fade-in class
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Nav */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-logo">PRAJWAL</div>
          <div className="nav-links">
            <a href="#problem" className={activeLink === 'problem' ? 'active' : ''}>Problem</a>
            <a href="#solution" className={activeLink === 'solution' ? 'active' : ''}>Solution</a>
            <a href="#market" className={activeLink === 'market' ? 'active' : ''}>Market</a>
            <a href="#traction" className={activeLink === 'traction' ? 'active' : ''}>Traction</a>
            <a href="#team" className={activeLink === 'founder' ? 'active' : ''}>Team</a>
          </div>
          <button className="nav-button">Request Deck</button>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="fade-in">
        <div className="container">
          <div className="hero-tag">Cross-border Payments · India · 2026</div>
          <h1 className="hero-heading">
            India has 55 million<br />
            UPI merchants.<br />
            Zero accept<br />
            foreign cards.
          </h1>
          <p className="hero-subheading">PRAJWAL fixes that.</p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary">View the Opportunity →</a>
            <a href="#" className="btn-outline">Watch Demo</a>
          </div>
          <div className="stats-row">
            <div className="stat-item fade-in">
              <span className="stat-value">$35B</span>
              <span className="stat-label">Tourism payment market</span>
            </div>
            <div className="stat-item fade-in">
              <span className="stat-value">55M+</span>
              <span className="stat-label">UPI merchants in India</span>
            </div>
            <div className="stat-item fade-in">
              <span className="stat-value">1.7%</span>
              <span className="stat-label">Revenue per transaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="fade-in">
        <div className="container">
          <div className="section-title">
            <div className="section-label">01 — THE PROBLEM</div>
            <div className="divider"></div>
          </div>
          <h2 className="section-heading">The gap nobody fixed.</h2>
          <div className="row">
            <div className="col-md-6 fade-in">
              <p>
                Foreign tourists visiting India carry dollars, pounds, and euros. 55 million merchants
                have UPI QR codes. But UPI requires an Indian bank account — which no foreign national has.
                Every day, crores of rupees in potential commerce evaporate into cash dependency.
              </p>
            </div>
            <div className="col-md-6 fade-in">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>The Reality</th>
                    <th>The Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="fade-in">
                    <td>UPI requires Indian account</td>
                    <td>Tourists carry cash</td>
                  </tr>
                  <tr className="fade-in">
                    <td>No cross-border QR payment</td>
                    <td>Merchants lose sales</td>
                  </tr>
                  <tr className="fade-in">
                    <td>Existing solutions: in-person KYC</td>
                    <td>90% user drop-off</td>
                  </tr>
                  <tr className="fade-in">
                    <td>Hidden fees 3-5%</td>
                    <td>Tourist frustration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="solution" className="fade-in">
        <div className="container">
          <div className="section-title">
            <div className="section-label">02 — THE SOLUTION</div>
            <div className="divider"></div>
          </div>
          <h2 className="section-heading">One scan. Any currency.</h2>
          <div className="steps-container">
            <div className="step-card fade-in">
              <div className="step-number">01</div>
              <div className="step-title">Download PRAJWAL</div>
              <p className="step-description">
                Digital KYC. Passport + selfie. Under 1 hour.
              </p>
            </div>
            <div className="step-card fade-in">
              <div className="step-number">02</div>
              <div className="step-title">Scan Any QR</div>
              <p className="step-description">
                Works on ALL 55M existing UPI QR codes.<br />
                Zero merchant changes needed.
              </p>
            </div>
            <div className="step-card fade-in">
              <div className="step-number">03</div>
              <div className="step-title">See Your Price</div>
              <p className="step-description">
                Live mid-market rates. Transparent 1.7% fee.<br />
                USD, GBP, EUR, AED, SGD, AUD.
              </p>
            </div>
            <div className="step-card fade-in">
              <div className="step-number">04</div>
              <div className="step-title">Done</div>
              <p className="step-description">
                Merchant receives INR instantly.<br />
                Tourist pays in their currency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="market" className="fade-in">
        <div className="container">
          <div className="section-title">
            <div className="section-label">03 — MARKET</div>
            <div className="divider"></div>
          </div>
          <h2 className="section-heading">A $185 billion bridge.</h2>
          <div className="market-tiers">
            <div className="tier fade-in">
              <div className="tier-label">PRIMARY</div>
              <h3 className="tier-heading">Foreign Tourist Payments India</h3>
              <div className="tier-amount">$35 Billion annually</div>
              <div className="tier-details">
                200M+ tourist visits · 55M UPI merchants
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className="tier fade-in">
              <div className="tier-label">SECONDARY</div>
              <h3 className="tier-heading">Indian Freelancer Payments</h3>
              <div className="tier-amount">$15 Billion annually</div>
              <div className="tier-details">
                15M+ freelancers · PayPal fees 4-5%
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '8%' }}></div>
              </div>
            </div>
            <div className="tier fade-in">
              <div className="tier-label">TERTIARY</div>
              <h3 className="tier-heading">NRI Remittances</h3>
              <div className="tier-amount">$135 Billion annually</div>
              <div className="tier-details">
                Largest remittance market globally
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '3%' }}></div>
              </div>
            </div>
          </div>
          <div className="text-center fade-in" style={{ marginTop: '2rem' }}>
            <p className="section-heading" style={{ fontSize: '2rem', fontWeight: '600' }}>
              Total: $185B+ TAM
            </p>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section id="traction" className="fade-in">
        <div className="container">
          <div className="section-title">
            <div className="section-label">04 — TRACTION</div>
            <div className="divider"></div>
          </div>
          <h2 className="section-heading">Built. Working. Ready.</h2>
          <div className="timeline">
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">May 2026</div>
                <p className="timeline-description">
                  Idea conceived, Bhubaneswar
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">May 2026</div>
                <p className="timeline-description">
                  Working demo built in 6 days
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">May 2026</div>
                <p className="timeline-description">
                  First real UPI QR scanned
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">Jun 2026</div>
                <p className="timeline-description">
                  Backend + Firebase integrated
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">Jun 2026</div>
                <p className="timeline-description">
                  Real Razorpay orders creating
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">Jun 2026</div>
                <p className="timeline-description">
                  Live exchange rates connected
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">Aug 2026</div>
                <p className="timeline-description">
                  Auth system + real user accounts
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">Q3 2026</div>
                <p className="timeline-description">
                  PPI license partner (in progress)
                </p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">Q4 2026</div>
                <p className="timeline-description">
                  First real transaction target
                </p>
              </div>
            </div>
          </div>
          <div className="metrics-row">
            <div className="metric-item fade-in">
              <div className="metric-value">6 Days</div>
              <div className="metric-label">Time to working demo</div>
            </div>
            <div className="metric-item fade-in">
              <div className="metric-value">₹0</div>
              <div className="metric-label">External funding raised</div>
            </div>
            <div className="metric-item fade-in">
              <div className="metric-value">1</div>
              <div className="metric-label">Solo founder</div>
            </div>
            <div className="metric-item fade-in">
              <div className="metric-value">55M+</div>
              <div className="metric-label">Merchants compatible day one</div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section id="competition" className="fade-in">
        <div className="container">
          <div className="section-title">
            <div className="section-label">05 — COMPETITION</div>
            <div className="divider"></div>
          </div>
          <h2 className="section-heading">The market exists. The winner hasn't emerged.</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>CheqUPI</th>
                <th>Mony</th>
                <th>PRAJWAL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fade-in">
                <td>In-person KYC</td>
                <td><span className="checkmark">✓</span> Required</td>
                <td><span className="checkmark">✓</span> Required</td>
                <td><span className="cross">✗</span> Digital only</td>
              </tr>
              <tr className="fade-in">
                <td>Hidden fees</td>
                <td>2.95%</td>
                <td>3.9%</td>
                <td>1.7% transparent</td>
              </tr>
              <tr className="fade-in">
                <td>App stability</td>
                <td>Poor</td>
                <td>Crashes</td>
                <td>Stable</td>
              </tr>
              <tr className="fade-in">
                <td>Merchant changes</td>
                <td>None</td>
                <td>None</td>
                <td>None</td>
              </tr>
              <tr className="fade-in">
                <td>Geographic focus</td>
                <td>Pan India</td>
                <td>Pan India</td>
                <td>Odisha first</td>
              </tr>
              <tr className="fade-in">
                <td>Funding</td>
                <td>YC backed</td>
                <td>Series A</td>
                <td>Bootstrapped</td>
              </tr>
            </tbody>
          </table>
          <p className="text-center fade-in" style={{ fontStyle: 'italic', color: '#FFB800', marginTop: '1.5rem' }}>
            "Users on TripAdvisor are literally asking for someone to build what we built."
          </p>
        </div>
      </section>

      {/* Business Model */}
      <section id="business" className="fade-in">
        <div className="container">
          <div className="section-title">
            <div className="section-label">06 — BUSINESS MODEL</div>
            <div className="divider"></div>
          </div>
          <h2 className="section-heading">Simple. Scalable. Defensible.</h2>
          <div className="business-model">
            <div className="model-column fade-in">
              <h3 className="model-title">LEFT — Revenue streams:</h3>
              <div className="stream-item fade-in">
                <span className="stream-label">1.7% per tourist transaction</span>
              </div>
              <div className="stream-item fade-in">
                <span className="stream-label">Premium subscription for frequent travelers</span>
              </div>
              <div className="stream-item fade-in">
                <span className="stream-label">B2B API licensing to hotels/travel platforms</span>
              </div>
              <div className="stream-item fade-in">
                <span className="stream-label">Freelancer payment product (Phase 2)</span>
              </div>
              <div className="stream-item fade-in">
                <span className="stream-label">Remittance product (Phase 3)</span>
              </div>
            </div>
            <div className="model-column fade-in">
              <h3 className="model-title">RIGHT — Unit economics:</h3>
              <div className="econ-item fade-in">
                <span className="econ-label">Average transaction:</span>
                <span>₹800</span>
              </div>
              <div className="econ-item fade-in">
                <span className="econ-label">PRAJWAL revenue per tx:</span>
                <span>₹13.60</span>
              </div>
              <div className="econ-item fade-in">
                <span className="econ-label">Monthly active tourists (target Y1):</span>
                <span>10,000</span>
              </div>
              <div className="econ-item fade-in">
                <span className="econ-label">Monthly revenue (Y1 target):</span>
                <span>₹13,60,000</span>
              </div>
              <div className="econ-item fade-in">
                <span className="econ-label">Path to profitability:</span>
                <span>Month 18</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ask */}
      <section id="ask" className="fade-in">
        <div className="container">
          <div className="section-title">
            <div className="section-label">07 — THE ASK</div>
            <div className="divider"></div>
          </div>
          <h2 className="section-heading">What we need. What you get.</h2>
          <div className="row">
            <div className="col-md-6 fade-in">
              <div className="card">
                <h3 className="model-title">LEFT box — Seeking:</h3>
                <p>
                  PPI License Partner<br />
                  Looking for an RBI-authorized PPI issuer<br />
                  to power real UPI One World transactions.<br />
                  We bring the product. You bring the license.<br />
                  Revenue share model.
                </p>
              </div>
            </div>
            <div className="col-md-6 fade-in">
              <div className="card">
                <h3 className="model-title">OR:</h3>
                <p>
                  Seed Investment<br />
                  ₹25-50 Lakhs to cover:<br />
                  · Company registration<br />
                  · Razorpay activation<br />
                  · KYC API integration<br />
                  · Marketing in Puri/Goa/Varanasi<br />
                  · 6 months runway
                </p>
                <p className="text-center fade-in" style={{ marginTop: '1rem', fontWeight: '600' }}>
                  Target: 1,00,000 users · ₹1.36 Cr MRR · Month 18
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="fade-in">
        <div className="container">
          <div className="section-title">
            <div className="section-label">08 — FOUNDER</div>
            <div className="divider"></div>
          </div>
          <h2 className="section-heading">Built by someone who couldn't stop thinking about this.</h2>
          <div className="founder-section">
            <div className="founder-initial fade-in">P</div>
            <div className="founder-details fade-in">
              <div className="founder-name">Pratik Pati</div>
              <div className="founder-title">Solo Founder · Bhubaneswar, Odisha</div>
              <p className="founder-quote fade-in">
                "I saw tourists walk away from market stalls in Puri because they couldn't pay.
                I built PRAJWAL in 6 days with zero funding to prove the problem is solvable.
                <br /><br />
                I've driven Rapido to survive while building this.
                My father had a stroke last year.
                I'm building this to change what's possible from a tier-2 city in India."
              </p>
              <div className="founder-footer fade-in">
                <div className="contact-info fade-in">
                  <div className="contact-item fade-in">
                    <span>📧</span>
                    <span>prateekgwip988@gmail.com</span>
                  </div>
                  <div className="contact-item fade-in">
                    <span>💼</span>
                    <span>LinkedIn: <a href="#" >[LinkedIn URL]</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fade-in">
        <div className="container">
          <div className="footer-logo">PRAJWAL</div>
          <div className="footer-tagline">Payment Revealed Across Journeys With A Light</div>
          <div>© 2026 PRAJWAL · Bhubaneswar, Odisha, India</div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;