(function () {

const topicData = [
  { id: 'intro', title: 'Introduction to Financial Management' },
  { id: 'meaning', title: 'Meaning of Financial Management' },
  { id: 'procurement', title: 'Procurement of Funds' },
  { id: 'utilisation', title: 'Effective Utilisation of Funds' },
  { id: 'evolution', title: 'Evolution of Financial Management' },
  { id: 'decisions', title: 'Finance Functions / Decisions' },
  { id: 'importance', title: 'Importance of Financial Management' },
  { id: 'scope', title: 'Scope of Financial Management' },
  { id: 'objectives', title: 'Objectives of Financial Management' },
  { id: 'profit', title: 'Profit Maximisation' },
  { id: 'wealth', title: 'Wealth / Value Maximisation' },
  { id: 'comparison', title: 'Profit vs Wealth Maximisation' },
  { id: 'risk', title: 'Risk–Return Trade-off' },
  { id: 'conflict', title: 'Conflicts in Profit vs Value Maximisation' },
  { id: 'finance-exec', title: 'Role of Finance Executive' },
  { id: 'cfo', title: 'Changing Role of CFO' },
  { id: 'distress', title: 'Financial Distress and Insolvency' },
  { id: 'accounting', title: 'Financial Management and Accounting' },
  { id: 'disciplines', title: 'Financial Management and Other Disciplines' },
  { id: 'agency', title: 'Agency Problem and Agency Cost' },
  { id: 'questions', title: 'ICAI Test Your Knowledge' }
];


const studyData = {

  intro: `
    <div class="study-card">

      <div class="study-title">
        <h3>1. Introduction to Financial Management</h3>
        <div class="topic-meta">
          Foundation for every later FM chapter
        </div>
      </div>

      <div class="study-body">

        <p>
          When an entrepreneur starts a new business, the business
          cannot begin by thinking only about sales or profit.
          A sequence of financial decisions has to be made.
        </p>

        <h4>Stage 1 — Selection of Assets</h4>

        <p>
          The entrepreneur decides which assets should be purchased,
          such as <strong>premises, machinery and equipment</strong>.
        </p>

        <h4>Stage 2 — Determination of Investment</h4>

        <p>
          After identifying the required assets, the entrepreneur
          has to determine the <strong>total investment</strong>
          required for acquiring them.
        </p>

        <h4>Stage 3 — Working Capital Requirement</h4>

        <p>
          Running the business requires money for day-to-day
          operations, including <strong>raw materials, salaries
          and wages</strong>. This is the working capital requirement.
        </p>

        <h4>Stage 4 — Sources of Finance</h4>

        <p>
          The entrepreneur must determine the sources from which
          the investment and working-capital requirement will be
          financed.
        </p>

        <ul>
          <li>Share Capital</li>
          <li>Entrepreneur's Own Funds</li>
          <li>Bank Borrowings</li>
          <li>Financial Institutions</li>
        </ul>

        <h4>The Three Major Financial Decisions</h4>

        <div class="table-wrap">

          <table>

            <thead>
              <tr>
                <th>Business Question</th>
                <th>Financial Decision</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Where to get the money from?</td>
                <td><strong>Financing Decision</strong></td>
              </tr>

              <tr>
                <td>Where to invest the money?</td>
                <td><strong>Investment Decision</strong></td>
              </tr>

              <tr>
                <td>How much to distribute amongst shareholders?</td>
                <td><strong>Dividend Decision</strong></td>
              </tr>

            </tbody>

          </table>

        </div>

        <div class="tag-row">
          <span class="tag">Investment</span>
          <span class="tag">Financing</span>
          <span class="tag">Dividend</span>
          <span class="tag">Working Capital</span>
        </div>

      </div>

    </div>
  `,


  meaning: `
    <div class="study-card">

      <div class="study-title">
        <h3>2. Meaning of Financial Management</h3>

        <div class="topic-meta">
          Managerial activity • financial resources • shareholder wealth
        </div>
      </div>

      <div class="study-body">

        <p>
          Financial Management is that
          <strong>managerial activity</strong> which is concerned
          with <strong>planning and controlling the firm's financial
          resources</strong>.
        </p>

        <p>
          It is also concerned with
          <strong>acquiring, financing and managing assets</strong>
          to accomplish the overall goal of a business enterprise,
          mainly to maximise shareholders' wealth.
        </p>

        <h4>Broad Functional Description</h4>

        <p>
          <strong>
            Forecasting + Planning + Organising + Directing +
            Co-ordinating + Controlling
          </strong>
        </p>

        <p>
          These activities relate to the acquisition and application
          of financial resources of an undertaking in keeping with
          its financial objectives.
        </p>

        <blockquote>
          Financial Management is concerned with the acquisition,
          financing and management of assets to accomplish the overall
          goal of a business enterprise.
        </blockquote>

        <h4>Two Basic Aspects</h4>

        <div class="split-grid">

          <div class="mini-card">
            <h5>Procurement of Funds</h5>
            <p>
              Obtaining the required funds from suitable sources.
            </p>
          </div>

          <div class="mini-card">
            <h5>Effective Utilisation of Funds</h5>
            <p>
              Employing the funds efficiently and profitably.
            </p>
          </div>

        </div>

        <h4>Important Understanding</h4>

        <p>
          Financial Management is broader than merely handling
          cash. It includes acquisition of funds, financing decisions,
          investment decisions, management of assets, risk-return
          considerations, working capital and the overall objective
          of shareholders' wealth maximisation.
        </p>

      </div>

    </div>
  `,


  procurement: `
    <div class="study-card">

      <div class="study-title">
        <h3>3. Procurement of Funds</h3>

        <div class="topic-meta">
          Source selection • cost • risk • control • capital structure
        </div>
      </div>

      <div class="study-body">

        <p>
          Procurement of funds means obtaining the finance required
          by the business. Funds can be obtained from different
          sources, and each source has different characteristics.
        </p>

        <h4>Three Important Considerations</h4>

        <div class="three-grid">

          <div class="mini-card">
            <h5>Cost</h5>
            <p>
              What is the cost of obtaining the funds?
            </p>
          </div>

          <div class="mini-card">
            <h5>Risk</h5>
            <p>
              What financial risk and obligations are created?
            </p>
          </div>

          <div class="mini-card">
            <h5>Control</h5>
            <p>
              Will the source affect ownership or control?
            </p>
          </div>

        </div>

        <h4>Equity</h4>

        <ul>
          <li>
            Comparatively safe from the fixed-repayment point of view.
          </li>

          <li>
            No ordinary repayment obligation except on liquidation.
          </li>

          <li>
            Usually an expensive source of funds.
          </li>

          <li>
            Shareholders' expected return may be relatively high.
          </li>

          <li>
            Dividend is an appropriation of profit.
          </li>

          <li>
            Fresh issue of shares may dilute the control of existing
            shareholders.
          </li>
        </ul>

        <h4>Debentures</h4>

        <ul>

          <li>
            Comparatively cheaper because interest has a tax advantage.
          </li>

          <li>
            Interest has to be paid even when profits are low or absent.
          </li>

          <li>
            Principal is repayable according to the agreed terms.
          </li>

          <li>
            Creates a greater degree of financial risk because of
            fixed financial obligations.
          </li>

        </ul>

        <h4>Commercial Banks</h4>

        <p>
          Commercial banks play an important role in meeting the
          short-term and long-term needs of business enterprises.
        </p>

        <h5>Fund-Based Services</h5>

        <ul>
          <li>Cash Credit</li>
          <li>Overdraft</li>
          <li>Term Loans</li>
          <li>Working Capital Term Loans</li>
          <li>Bill Purchase / Discounting</li>
        </ul>

        <h5>Non-Fund-Based Services</h5>

        <ul>
          <li>Guarantees</li>
          <li>Letters of Credit</li>
        </ul>

        <h4>International Funding</h4>

        <ul>
          <li>Foreign Direct Investment — FDI</li>
          <li>Foreign Institutional Investors — FII</li>
          <li>American Depository Receipts — ADRs</li>
          <li>Global Depository Receipts — GDRs</li>
        </ul>

        <h4>Angel Financing</h4>

        <p>
          Angel financing is a form of equity financing in which
          an angel investor, generally a wealthy individual, provides
          capital in exchange for ownership/equity in the enterprise.
        </p>

        <h4>Venture Capital</h4>

        <p>
          Venture capital is a financing source used particularly
          for businesses with growth potential and higher investment
          requirements.
        </p>

        <blockquote>
          Finance manager's task: balance cost, risk and control
          while establishing an appropriate equity-debt structure.
        </blockquote>

        <div class="tag-row">
          <span class="tag">Cost</span>
          <span class="tag">Risk</span>
          <span class="tag">Control</span>
          <span class="tag">Equity</span>
          <span class="tag">Debt</span>
          <span class="tag">Capital Structure</span>
        </div>

      </div>

    </div>
  `,


  utilisation: `
    <div class="study-card">

      <div class="study-title">

        <h3>4. Effective Utilisation of Funds</h3>

        <div class="topic-meta">
          Capital budgeting • fixed assets • working capital • solvency
        </div>

      </div>

      <div class="study-body">

        <p>
          Funds are procured at a cost and with risk.
          Therefore, they must be utilised properly and profitably.
        </p>

        <p>
          If funds remain idle or are employed in a manner that does
          not generate adequate return, the financial efficiency of
          the enterprise suffers.
        </p>

        <h4>A. Utilisation for Fixed Assets</h4>

        <p>
          Funds should be invested so that the company can operate
          at its optimum level without endangering financial solvency.
        </p>

        <h4>Capital Budgeting / Investment Appraisal</h4>

        <p>
          Capital budgeting is the planning process used to determine
          whether long-term investments such as:
        </p>

        <ul>
          <li>New machinery</li>
          <li>Replacement machinery</li>
          <li>New plants</li>
          <li>New products</li>
          <li>Research and development projects</li>
        </ul>

        <p>
          will provide the desired return.
        </p>

        <h4>B. Utilisation for Working Capital</h4>

        <p>
          The finance manager must maintain an
          <strong>optimum level of working capital</strong>.
        </p>

        <p>
          Excessive funds should not remain unnecessarily blocked in:
        </p>

        <ul>
          <li>Inventory</li>
          <li>Book Debts / Receivables</li>
          <li>Cash</li>
        </ul>

        <div class="callout">

          <strong>Core Principle:</strong>

          Funds should be employed so that the return generated
          is sufficient relative to the cost and risk of the funds.

        </div>

      </div>

    </div>
  `,


  evolution: `
    <div class="study-card">

      <div class="study-title">
        <h3>5. Evolution of Financial Management</h3>

        <div class="topic-meta">
          Traditional • Transitional • Modern
        </div>
      </div>

      <div class="study-body">

        <div class="three-grid">

          <div class="mini-card">

            <h5>Traditional Phase</h5>

            <p>
              Financial Management was largely concerned with
              <strong>occasional major events</strong>.
            </p>

            <ul>
              <li>Takeovers</li>
              <li>Mergers</li>
              <li>Expansion</li>
              <li>Liquidation</li>
            </ul>

          </div>


          <div class="mini-card">

            <h5>Transitional Phase</h5>

            <p>
              Attention moved towards
              <strong>day-to-day financial problems</strong>.
            </p>

            <ul>
              <li>Funds analysis</li>
              <li>Financial planning</li>
              <li>Financial control</li>
            </ul>

          </div>


          <div class="mini-card">

            <h5>Modern Phase</h5>

            <p>
              The scope of Financial Management expanded
              considerably.
            </p>

            <ul>
              <li>Financial analysis</li>
              <li>Efficient markets</li>
              <li>Capital budgeting</li>
              <li>Option pricing</li>
              <li>Valuation models</li>
            </ul>

          </div>

        </div>

        <div class="callout">

          <strong>Memory:</strong>

          Traditional → Occasional Events

          <br>

          Transitional → Day-to-Day Financial Problems

          <br>

          Modern → Broad Financial Decision-Making

        </div>

      </div>

    </div>
  `,


  decisions: `
    <div class="study-card">

      <div class="study-title">
        <h3>6. Finance Functions / Finance Decisions</h3>

        <div class="topic-meta">
          Investment • Financing • Dividend • Working Capital
        </div>
      </div>

      <div class="study-body">

        <div class="formula-box">
          V = f (I, F, D)
        </div>

        <p>
          The value of the firm is affected by the major financial
          decisions represented by:
        </p>

        <ul>
          <li><strong>I = Investment Decision</strong></li>
          <li><strong>F = Financing Decision</strong></li>
          <li><strong>D = Dividend Decision</strong></li>
        </ul>

        <h4>A. Investment Decision</h4>

        <p>
          Investment decisions relate to the selection of assets in
          which the firm's funds will be invested.
        </p>

        <ul>
          <li>Fixed Assets</li>
          <li>Current Assets</li>
          <li>Long-term Projects</li>
          <li>Working Capital Requirements</li>
        </ul>

        <p>
          Long-term investments are evaluated through
          <strong>Capital Budgeting</strong>.
        </p>

        <blockquote>
          Exam trigger: Where should the money be invested?
        </blockquote>

        <h4>B. Financing Decision</h4>

        <p>
          Financing decisions relate to acquiring optimum finance
          to meet the financial objectives of the enterprise.
        </p>

        <p>The finance manager considers:</p>

        <ul>
          <li>Sources of funds</li>
          <li>Cost of funds</li>
          <li>Equity</li>
          <li>Debt</li>
          <li>Risk</li>
          <li>Capital Structure</li>
          <li>Cash Flow Requirements</li>
        </ul>

        <blockquote>
          Exam trigger: Where should the money come from?
        </blockquote>

        <h4>C. Dividend Decision</h4>

        <p>
          The dividend decision determines how much profit should be
          distributed to shareholders and how much should be retained
          to support growth.
        </p>

        <p>
          For a sole trader, withdrawals are generally called
          <strong>drawings</strong>. In a company, distributions to
          shareholders are called <strong>dividends</strong>.
        </p>

        <blockquote>
          Exam trigger: How much should be distributed to shareholders?
        </blockquote>

        <h4>Interrelationship</h4>

        <p>
          The three finance decisions are interrelated.
          Investment affects financing requirements;
          financing affects risk and cost; dividend and retention
          influence future financing capacity.
        </p>

        <h4>Short-Term Finance Decision</h4>

        <p>
          Short-term finance decisions generally relate to the
          management of current assets and current liabilities.
          This is <strong>Working Capital Management (WCM)</strong>.
        </p>

      </div>

    </div>
  `,


  importance: `
    <div class="study-card">

      <div class="study-title">
        <h3>7. Importance of Financial Management</h3>
        <div class="topic-meta">Why financial management is essential</div>
      </div>

      <div class="study-body">

        <p>
          Financial Management is crucial for successful business
          operations and growth.
        </p>

        <h4>Important areas</h4>

        <ul>

          <li>
            Taking care not to over-invest in fixed assets
          </li>

          <li>
            Balancing cash inflows with cash outflows
          </li>

          <li>
            Ensuring adequate short-term working capital
          </li>

          <li>
            Setting sales revenue targets that support growth
          </li>

          <li>
            Increasing gross profit through appropriate pricing
          </li>

          <li>
            Controlling general and administrative expenses
          </li>

          <li>
            Tax planning
          </li>

        </ul>

        <div class="callout">

          <strong>Core idea:</strong>

          Financial Management ensures that funds are planned,
          obtained, employed and controlled in a manner consistent
          with the financial objectives of the enterprise.

        </div>

      </div>

    </div>
  `,


  scope: `
    <div class="study-card">

      <div class="study-title">
        <h3>8. Scope of Financial Management</h3>
        <div class="topic-meta">Acquisition and use of funds</div>
      </div>

      <div class="study-body">

        <p>
          Financial Management is mainly concerned with the
          <strong>acquisition and use of funds</strong> by an
          organisation.
        </p>

        <h4>Major Areas within Scope</h4>

        <ol>

          <li>
            <strong>Determination of size of the enterprise</strong>
            and the rate of growth.
          </li>

          <li>
            <strong>Determination of composition of assets</strong>
            of the enterprise.
          </li>

          <li>
            <strong>Determination of financing mix</strong>,
            such as the debt-equity mix.
          </li>

          <li>
            <strong>Analysis, planning and control of financial
            affairs</strong> of the enterprise.
          </li>

        </ol>

        <div class="split-grid">

          <div class="mini-card">
            <h5>Importance</h5>
            <p>
              Why Financial Management is important.
            </p>
          </div>

          <div class="mini-card">
            <h5>Scope</h5>
            <p>
              What Financial Management covers.
            </p>
          </div>

        </div>

      </div>

    </div>
  `,


  objectives: `
    <div class="study-card">

      <div class="study-title">
        <h3>9. Objectives of Financial Management</h3>

        <div class="topic-meta">
          Profit Maximisation vs Wealth / Value Maximisation
        </div>

      </div>

      <div class="study-body">

        <p>
          Efficient Financial Management requires clear objectives
          against which financial decisions can be evaluated.
        </p>

        <div class="two-column-objectives">

          <div class="mini-card">
            <h5>1. Profit Maximisation</h5>
            <p>
              Traditional objective focusing on maximising the
              profits of the concern.
            </p>
          </div>

          <div class="mini-card">
            <h5>2. Wealth / Value Maximisation</h5>
            <p>
              Modern objective focusing on maximising shareholders'
              wealth / market value.
            </p>
          </div>

        </div>

      </div>

    </div>
  `,


  profit: `
    <div class="study-card">

      <div class="study-title">
        <h3>10. Profit Maximisation</h3>

        <div class="topic-meta">
          Traditional objective • four major limitations
        </div>

      </div>

      <div class="study-body">

        <p>
          Under the profit maximisation approach, the finance manager
          is expected to make decisions in a manner that maximises
          the profits of the concern.
        </p>

        <div class="callout">
          Profit maximisation is a useful objective but is
          <strong>not sufficient as the sole objective</strong>
          of modern Financial Management.
        </div>

        <h4>1. Profit is Vague</h4>

        <p>
          The word profit may refer to:
        </p>

        <ul>
          <li>Short-term profit</li>
          <li>Long-term profit</li>
          <li>Total profit</li>
          <li>Rate of profit</li>
        </ul>

        <p>
          Thus, the objective does not clearly identify the exact
          measure or period.
        </p>

        <h4>2. Ignores Risk and Uncertainty</h4>

        <p>
          High-profit propositions may involve high risk.
          If profit alone is maximised, the finance manager may
          accept excessively risky alternatives.
        </p>

        <h4>3. Ignores Timing of Returns</h4>

        <p>
          It does not adequately distinguish between a return received
          earlier and a higher return received much later.
        </p>

        <h4>4. Too Narrow</h4>

        <p>
          Profit maximisation may ignore wider obligations to:
        </p>

        <ul>
          <li>Workers</li>
          <li>Consumers</li>
          <li>Society</li>
          <li>Ethical business practices</li>
        </ul>

        <div class="callout">

          <strong>Memory Code — VRTN</strong>

          <br>

          V = Vague

          <br>

          R = Risk ignored

          <br>

          T = Timing ignored

          <br>

          N = Narrow

        </div>

      </div>

    </div>
  `,


  wealth: `
    <div class="study-card">

      <div class="study-title">
        <h3>11. Wealth / Value Maximisation</h3>

        <div class="topic-meta">
          Market value • cash flow • risk • timing • TVM
        </div>

      </div>

      <div class="study-body">

        <p>
          Wealth maximisation focuses on the creation and
          maximisation of shareholder value.
        </p>

        <p>
          Shareholders' wealth is the result of
          <strong>cost-benefit analysis adjusted for timing and risk</strong>,
          i.e. considering the <strong>time value of money</strong>.
        </p>

        <h4>Three Foundations</h4>

        <div class="three-grid">

          <div class="mini-card">
            <h5>Cash Flow Approach</h5>
            <p>
              Financial decisions emphasise cash flows rather than
              accounting profit.
            </p>
          </div>

          <div class="mini-card">
            <h5>Cost-Benefit Analysis</h5>
            <p>
              Benefits and costs should be evaluated systematically.
            </p>
          </div>

          <div class="mini-card">
            <h5>Time Value of Money</h5>
            <p>
              Timing of cash flows matters because money has a
              time value.
            </p>
          </div>

        </div>

        <h4>Wealth Relationship</h4>

        <div class="formula-box">
          Wealth = Present Value of Benefits − Present Value of Costs
        </div>

        <h4>Market Value</h4>

        <p>
          The shareholder value maximisation model seeks to maximise
          the market value of the firm.
        </p>

        <p>
          Market price reflects factors such as present and future
          earnings, timing and risk of earnings, dividend policy and
          other value-relevant factors.
        </p>

      </div>

    </div>
  `,


  comparison: `
    <div class="study-card">

      <div class="study-title">
        <h3>12. Profit Maximisation vs Wealth Maximisation</h3>

        <div class="topic-meta">
          Important comparison for theory questions
        </div>
      </div>

      <div class="study-body">

        <div class="table-wrap">

          <table>

            <thead>

              <tr>
                <th>Basis</th>
                <th>Profit Maximisation</th>
                <th>Wealth Maximisation</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Objective</td>
                <td>Large amount of profits</td>
                <td>Highest market value of shares</td>
              </tr>

              <tr>
                <td>Time perspective</td>
                <td>Emphasises short-term gains</td>
                <td>Emphasises long-term gains</td>
              </tr>

              <tr>
                <td>Risk</td>
                <td>Ignores risk / uncertainty</td>
                <td>Recognises risk / uncertainty</td>
              </tr>

              <tr>
                <td>Timing of Returns</td>
                <td>Ignores timing</td>
                <td>Recognises timing</td>
              </tr>

              <tr>
                <td>Orientation</td>
                <td>Profit-oriented</td>
                <td>Shareholder-return oriented</td>
              </tr>

              <tr>
                <td>Major limitation</td>
                <td>
                  Limited because it does not fully recognise risk,
                  timing and wider considerations
                </td>
                <td>
                  May offer no clear direct relationship between
                  financial decisions and share price
                </td>
              </tr>

            </tbody>

          </table>

        </div>

        <div class="callout">

          In an uncertain and multi-period environment,
          <strong>wealth maximisation</strong> is generally considered
          a better objective.

        </div>

      </div>

    </div>
  `,


  risk: `
    <div class="study-card">

      <div class="study-title">
        <h3>13. Risk–Return Trade-off</h3>

        <div class="topic-meta">
          Higher return expectations and higher risk
        </div>

      </div>

      <div class="study-body">

        <p>
          A higher projected profit does not automatically mean that
          the alternative is better.
        </p>

        <p>
          If an alternative provides a greater expected return but
          also involves greater risk, the decision must consider the
          <strong>risk-return trade-off</strong>.
        </p>

        <h4>Integrated Example</h4>

        <div class="story-value">

          <div class="value-box">
            <div class="value-label">Product X</div>
            <div class="value-number">
              ₹50,000 total earnings
            </div>
            <div class="value-label">
              Lower risk
            </div>
          </div>

          <div class="value-box">
            <div class="value-label">Product Y</div>
            <div class="value-number">
              ₹55,000 total earnings
            </div>
            <div class="value-label">
              Higher risk
            </div>
          </div>

        </div>

        <p>
          A profit-maximisation approach would favour Product Y,
          but a wealth-maximisation approach requires consideration
          of whether the additional return sufficiently compensates
          the shareholder for the additional risk.
        </p>

        <blockquote>
          Higher risk generally requires higher expected return.
        </blockquote>

      </div>

    </div>
  `,


  conflict: `
    <div class="study-card">

      <div class="study-title">
        <h3>14. Conflicts in Profit vs Value Maximisation</h3>

        <div class="topic-meta">
          Stakeholders • management • survival • long-term objectives
        </div>

      </div>

      <div class="study-body">

        <p>
          Management is the decision-making authority in a company.
          Managers may sometimes pursue personal goals rather than
          the interests of shareholders.
        </p>

        <h4>Stakeholders</h4>

        <ul>
          <li>Shareholders</li>
          <li>Employees</li>
          <li>Creditors</li>
          <li>Customers</li>
          <li>Government</li>
          <li>Society</li>
        </ul>

        <p>
          Wealth maximisation is generally more consistent with
          long-term enterprise survival and the interests of
          different stakeholder groups.
        </p>

        <p>
          In an uncertain and multi-period environment,
          wealth maximisation is generally preferred.
        </p>

        <p>
          Where the time period is short and uncertainty is low,
          profit maximisation and wealth maximisation may be broadly
          similar.
        </p>

      </div>

    </div>
  `,


  'finance-exec': `
    <div class="study-card">

      <div class="study-title">

        <h3>15. Role of Finance Executive</h3>

        <div class="topic-meta">
          Financial planning • investment • financing • resources • risk
        </div>

      </div>

      <div class="study-body">

        <h4>1. Financial Analysis and Planning</h4>

        <p>
          Determining the appropriate amount of funds to employ
          and considering the size and rate of growth of the firm.
        </p>

        <h4>2. Investment Decisions</h4>

        <p>
          Efficient allocation of funds to specific assets.
        </p>

        <h4>3. Financing and Capital Structure Decisions</h4>

        <p>
          Raising funds on favourable terms and determining the
          appropriate composition of liabilities.
        </p>

        <h4>4. Management of Financial Resources</h4>

        <p>
          Managing resources such as working capital efficiently.
        </p>

        <h4>5. Risk Management</h4>

        <p>
          Protecting assets and avoiding unnecessary financial risk.
        </p>

        <div class="callout">

          The finance executive aims to maximise returns in relation
          to the given risk and ensure that funds flowing into and
          out of the enterprise are properly monitored and utilised.

        </div>

      </div>

    </div>
  `,


  cfo: `
    <div class="study-card">

      <div class="study-title">
        <h3>16. Changing Role of the CFO</h3>

        <div class="topic-meta">
          From accounting specialist to strategic business partner
        </div>
      </div>

      <div class="study-body">

        <h4>Traditional CFO Role</h4>

        <ul>

          <li>Budgeting</li>
          <li>Forecasting</li>
          <li>Accounting</li>
          <li>Treasury / Cash Management</li>
          <li>Internal Financial Reporting</li>
          <li>Tax Filing</li>
          <li>Accounts Payable / Receivable</li>
          <li>Expense Management</li>
          <li>Regulatory Compliance</li>

        </ul>

        <h4>Modern CFO Role</h4>

        <ul>

          <li>Mergers and Acquisitions</li>
          <li>Profitability Analysis</li>
          <li>Pricing Analysis</li>
          <li>Outsourcing Decisions</li>
          <li>IT Oversight</li>
          <li>HR Oversight</li>
          <li>Strategic Planning</li>
          <li>Risk Management</li>

        </ul>

        <blockquote>
          The modern CFO is a strategic business partner of the CEO
          and contributes to sustainable growth.
        </blockquote>

      </div>

    </div>
  `,


  distress: `
    <div class="study-card">

      <div class="study-title">

        <h3>17. Financial Distress and Insolvency</h3>

        <div class="topic-meta">
          Liquidity pressure → prolonged distress → inability to repay debt
        </div>

      </div>

      <div class="study-body">

        <h4>Financial Distress</h4>

        <p>
          Financial distress is a position where
          <strong>
            cash inflows of a firm are inadequate to meet all its
            current obligations.
          </strong>
        </p>

        <h4>Insolvency</h4>

        <p>
          If financial distress continues for a prolonged period and
          the firm becomes unable to meet its obligations and repay
          its debts, the firm becomes insolvent.
        </p>

        <div class="callout">

          <strong>Distinction:</strong>

          Financial distress is the cash-flow pressure.

          <br><br>

          Insolvency is the inability to repay debts resulting
          from continued financial distress.

        </div>

      </div>

    </div>
  `,


  accounting: `
    <div class="study-card">

      <div class="study-title">

        <h3>18. Financial Management and Accounting</h3>

        <div class="topic-meta">
          Accrual principle vs cash-flow orientation
        </div>

      </div>

      <div class="study-body">

        <p>
          Accounting is an important input into financial decision-making,
          but Financial Management and Accounting differ in treatment
          of funds and decision-making focus.
        </p>

        <h4>Difference 1 — Treatment of Funds</h4>

        <div class="split-grid">

          <div class="mini-card">

            <h5>Accounting</h5>

            <p>
              Uses the <strong>accrual principle</strong>.
              Revenue and expenses are recognised according to
              accrual-based accounting principles rather than only
              on actual cash movement.
            </p>

          </div>


          <div class="mini-card">

            <h5>Financial Management</h5>

            <p>
              Focuses on <strong>cash flows</strong> because the
              finance manager is concerned with maintaining solvency,
              meeting obligations, acquiring assets and financing
              business operations.
            </p>

          </div>

        </div>

        <h4>Difference 2 — Decision-Making</h4>

        <div class="split-grid">

          <div class="mini-card">

            <h5>Accounting</h5>

            <p>
              Primarily collects and presents financial information.
            </p>

          </div>


          <div class="mini-card">

            <h5>Financial Management</h5>

            <p>
              Uses financial information for
              <strong>
                financial planning, control and decision-making
              </strong>.
            </p>

          </div>

        </div>

        <blockquote>
          Financial management begins where accounting ends.
        </blockquote>

      </div>

    </div>
  `,


  disciplines: `
    <div class="study-card">

      <div class="study-title">

        <h3>19. Financial Management and Other Related Disciplines</h3>

        <div class="topic-meta">
          Supportive disciplines for financial decision-making
        </div>

      </div>

      <div class="study-body">

        <p>
          Financial Management is not an independent island.
          It draws heavily on related disciplines.
        </p>

        <div class="three-grid">

          <div class="mini-card">
            <h5>Accounting</h5>
            <p>
              Primary source of financial information for
              decision-making.
            </p>
          </div>

          <div class="mini-card">
            <h5>Economics</h5>
            <p>
              Helps the finance manager understand the external
              economic environment.
            </p>
          </div>

          <div class="mini-card">
            <h5>Marketing</h5>
            <p>
              New product and promotion plans can affect capital
              outlays and projected cash flows.
            </p>
          </div>

          <div class="mini-card">
            <h5>Production</h5>
            <p>
              Changes in production processes may require capital
              expenditure.
            </p>
          </div>

          <div class="mini-card">
            <h5>Quantitative Methods</h5>
            <p>
              Analytical tools support complex financial decisions.
            </p>
          </div>

        </div>

        <div class="callout">

          Accounting is the primary discipline supporting
          Financial Management, while marketing, production and
          quantitative methods are supportive in nature.

        </div>

      </div>

    </div>
  `,


  agency: `
    <div class="study-card">

      <div class="study-title">

        <h3>20. Agency Problem and Agency Cost</h3>

        <div class="topic-meta">
          Separation of ownership and management
        </div>

      </div>

      <div class="study-body">

        <h4>Agency Problem</h4>

        <p>
          In corporations, owners/shareholders are often separate
          from managers. Managers are expected to act in shareholders'
          best interests, but they may instead pursue personal
          objectives such as higher salary, perks, status or private
          benefits.
        </p>

        <blockquote>

          Agency Problem = the possibility that managers place
          personal objectives ahead of the objectives of owners.

        </blockquote>

        <h4>Agency Cost</h4>

        <p>
          Agency cost is the additional cost borne by shareholders
          to monitor managers and control their behaviour so as to
          protect and maximise shareholders' wealth.
        </p>

        <h4>Four Types of Agency Cost</h4>

        <ol>

          <li><strong>Monitoring</strong></li>

          <li><strong>Bonding</strong></li>

          <li><strong>Opportunity</strong></li>

          <li><strong>Structuring</strong></li>

        </ol>

        <h4>Mitigation</h4>

        <p>
          The agency problem involving debt lenders can be addressed
          through <strong>negative covenants</strong>, such as
          restricting excessive borrowing.
        </p>

        <p>
          Manager-shareholder conflicts may be addressed through
          managerial compensation linked to company performance
          and long-term objectives, share-based arrangements and
          effective monitoring.
        </p>

      </div>

    </div>
  `,


  questions: `
<div class="study-card">

  <div class="study-title">

    <h3>21. ICAI Test Your Knowledge</h3>

    <div class="topic-meta">
      MCQs and Theoretical Questions
    </div>

  </div>


  <div class="study-body">


    <!-- =========================
         MCQs
    ========================== -->

    <h4>Multiple Choice Questions (MCQs)</h4>

    <div class="mcq-list">


      <!-- MCQ 1 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 1
        </div>

        <p class="mcq-question">

          Focus of financial management is mainly concerned with
          the decision related to:

        </p>

        <div class="mcq-options">

          <div>(a) Financing</div>

          <div>(b) Investing</div>

          <div>(c) Dividend</div>

          <div>(d) All of above.</div>

        </div>

        <div class="answer-box">

          <strong>Answer: (d) All of above.</strong>

          <p>
            Financial Management is mainly concerned with the three
            major financial decisions, namely Investment Decision,
            Financing Decision and Dividend Decision.
          </p>

        </div>

      </div>


      <!-- MCQ 2 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 2
        </div>

        <p class="mcq-question">

          The main objective of financial management is to:

        </p>

        <div class="mcq-options">

          <div>(a) Secure profitability</div>

          <div>(b) Maximise shareholder wealth</div>

          <div>(c) Enhancing the cost of debt</div>

          <div>(d) None of above.</div>

        </div>

        <div class="answer-box">

          <strong>Answer: (b) Maximise shareholder wealth.</strong>

          <p>
            Wealth maximisation is regarded as the preferred objective
            of Financial Management in today's uncertain and
            multi-period business environment.
          </p>

        </div>

      </div>


      <!-- MCQ 3 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 3
        </div>

        <p class="mcq-question">

          The shareholder value maximisation model holds that the
          primary goal of the firm is to maximise its:

        </p>

        <div class="mcq-options">

          <div>(a) Accounting profit</div>

          <div>(b) Liquidity</div>

          <div>(c) Market value</div>

          <div>(d) Working capital.</div>

        </div>

        <div class="answer-box">

          <strong>Answer: (c) Market value.</strong>

          <p>
            The shareholder value maximisation model holds that the
            primary goal of the firm is to maximise its market value.
          </p>

        </div>

      </div>


      <!-- MCQ 4 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 4
        </div>

        <p class="mcq-question">

          Wealth maximisation approach is based on the concept of:

        </p>

        <div class="mcq-options">

          <div>(a) Cost benefit analysis</div>

          <div>(b) Cash flow approach</div>

          <div>(c) Time value of money</div>

          <div>(d) All of the above.</div>

        </div>

        <div class="answer-box">

          <strong>Answer: (d) All of the above.</strong>

          <p>
            Wealth maximisation is based on the Cash Flow Approach,
            Cost-Benefit Analysis and application of the Time Value
            of Money.
          </p>

        </div>

      </div>


      <!-- MCQ 5 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 5
        </div>

        <p class="mcq-question">

          Management of all matters related to an organisation’s
          finances is called:

        </p>

        <div class="mcq-options">

          <div>(a) Cash inflows and outflows</div>

          <div>(b) Allocation of resources</div>

          <div>(c) Financial management</div>

          <div>(d) Finance.</div>

        </div>

        <div class="answer-box">

          <strong>Answer: (c) Financial management.</strong>

          <p>
            Financial Management is concerned with management of
            financial resources, including planning, controlling,
            acquiring, financing and managing assets.
          </p>

        </div>

      </div>


      <!-- MCQ 6 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 6
        </div>

        <p class="mcq-question">

          Which of the following is the disadvantage of having
          shareholders wealth maximisation goals?

        </p>

        <div class="mcq-options">

          <div>(a) Emphasizes the short-term gains.</div>

          <div>(b) Ignores the timing of returns.</div>

          <div>(c) Requires immediate resources.</div>

          <div>
            (d) Offers no clear relationship between financial
            decisions and share price.
          </div>

        </div>

        <div class="answer-box">

          <strong>
            Answer: (d) Offers no clear relationship between
            financial decisions and share price.
          </strong>

          <p>
            The ICAI comparison table identifies this as a
            disadvantage of shareholders' wealth maximisation.
            The other alternatives represent limitations associated
            with profit maximisation.
          </p>

        </div>

      </div>


      <!-- MCQ 7 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 7
        </div>

        <p class="mcq-question">

          The most important goal of financial management is:

        </p>

        <div class="mcq-options">

          <div>(a) Profit maximisation</div>

          <div>(b) Matching income and expenditure</div>

          <div>(c) Using business assets effectively</div>

          <div>(d) Wealth maximisation.</div>

        </div>

        <div class="answer-box">

          <strong>Answer: (d) Wealth maximisation.</strong>

          <p>
            Wealth maximisation is the preferred objective of
            Financial Management in the modern, uncertain and
            multi-period business environment.
          </p>

        </div>

      </div>


      <!-- MCQ 8 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 8
        </div>

        <p class="mcq-question">

          To achieve wealth maximization, the finance manager has
          to take careful decision in respect of:

        </p>

        <div class="mcq-options">

          <div>(a) Investment</div>

          <div>(b) Financing</div>

          <div>(c) Dividend</div>

          <div>(d) All the above.</div>

        </div>

        <div class="answer-box">

          <strong>Answer: (d) All the above.</strong>

          <p>
            Investment, Financing and Dividend decisions are the
            three major financial decisions and are interrelated.
          </p>

        </div>

      </div>


      <!-- MCQ 9 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 9
        </div>

        <p class="mcq-question">

          Early in the history of finance, an important issue was:

        </p>

        <div class="mcq-options">

          <div>(a) Liquidity</div>

          <div>(b) Technology</div>

          <div>(c) Capital structure</div>

          <div>(d) Financing options.</div>

        </div>

        <div class="answer-box">

          <strong>Answer: (a) Liquidity.</strong>

          <p>
            The ICAI answer to this chapter MCQ is Liquidity.
          </p>

        </div>

      </div>


      <!-- MCQ 10 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 10
        </div>

        <p class="mcq-question">

          Which of the following are microeconomic variables that
          help define and explain the discipline of finance?

        </p>

        <div class="mcq-options">

          <div>(a) Risk and return</div>

          <div>(b) Capital structure</div>

          <div>(c) Inflation</div>

          <div>(d) All of the above.</div>

        </div>

        <div class="answer-box">

          <strong>Answer: (d) All of the above.</strong>

          <p>
            The answer given in the chapter's Test Your Knowledge
            section is All of the above.
          </p>

        </div>

      </div>


      <!-- MCQ 11 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 11
        </div>

        <p class="mcq-question">

          Financial Management is mainly concerned with the-

        </p>

        <div class="mcq-options">

          <div>
            (a) Acquiring and developing assets to forfeit its
            overall benefit.
          </div>

          <div>
            (b) Acquiring, financing and managing assets to
            accomplish the overall goal of a business enterprise.
          </div>

          <div>
            (c) Efficient management of the business.
          </div>

          <div>
            (d) Sole objective of profit maximisation.
          </div>

        </div>

        <div class="answer-box">

          <strong>
            Answer: (b) Acquiring, financing and managing assets
            to accomplish the overall goal of a business enterprise.
          </strong>

          <p>
            This reflects the core meaning of Financial Management.
          </p>

        </div>

      </div>


      <!-- MCQ 12 -->

      <div class="mcq-card">

        <div class="mcq-number">
          MCQ 12
        </div>

        <p class="mcq-question">

          Which of the following need not be followed by the finance
          manager for measuring and maximising shareholders' wealth?

        </p>

        <div class="mcq-options">

          <div>(a) Accounting profit analysis.</div>

          <div>(b) Cash Flow approach.</div>

          <div>(c) Cost benefit analysis.</div>

          <div>(d) Application of time value of money.</div>

        </div>

        <div class="answer-box">

          <strong>Answer: (a) Accounting profit analysis.</strong>

          <p>
            The wealth maximisation approach emphasises the
            Cash Flow Approach, Cost-Benefit Analysis and Time Value
            of Money rather than accounting profit analysis.
          </p>

        </div>

      </div>


    </div>


    <!-- =========================
         THEORETICAL QUESTIONS
    ========================== -->

    <h4 class="theory-heading">
      Theoretical Questions — 10 Mark Answer Practice
    </h4>


    <!-- THEORY 1 -->

    <div class="theory-card">

      <div class="theory-number">
        Theory Question 1
      </div>

      <h3>
        POINT OUT the difference between Financial Management
        & Financial Accounting.
      </h3>


      <div class="answer-box theory-answer">

        <h4>Answer</h4>

        <p>
          Financial Management and Financial Accounting are closely
          related because accounting provides important financial
          information required for financial decision-making.
          However, they differ mainly in their treatment of funds
          and their focus on decision-making.
        </p>


        <h5>1. Difference in Treatment of Funds</h5>

        <p>

          <strong>Financial Accounting:</strong>

          Financial accounting is based on the
          <strong>accrual principle</strong>. Revenue is recognised
          at the point of sale and expenses are recognised when
          incurred rather than merely when cash is received or paid.

        </p>

        <p>

          <strong>Financial Management:</strong>

          Financial Management is primarily concerned with
          <strong>cash flows</strong>. Revenues are considered as
          cash inflows and expenses as cash outflows for the
          purpose of financial decision-making because the finance
          manager is concerned with maintaining solvency and
          meeting financial obligations.

        </p>


        <h5>2. Difference in Decision-Making</h5>

        <p>

          <strong>Financial Accounting:</strong>

          The primary focus is to collect and present financial
          information regarding the past, present and future
          operations of the organisation.

        </p>

        <p>

          <strong>Financial Management:</strong>

          The finance manager uses accounting information for
          <strong>financial planning, financial control and
          decision-making</strong>.

        </p>


        <h5>Conclusion</h5>

        <p>

          Thus, accounting mainly provides the financial data,
          whereas Financial Management uses that information for
          financial planning, control and decision-making.

          Therefore:

        </p>

        <blockquote>
          “Financial management begins where accounting ends.”
        </blockquote>

      </div>

    </div>


    <!-- THEORY 2 -->

    <div class="theory-card">

      <div class="theory-number">
        Theory Question 2
      </div>

      <h3>

        “Financial Management is concerned with acquisition &
        financing of short term & long-term credit”.
        ELABORATE.

      </h3>


      <div class="answer-box theory-answer">

        <h4>Answer</h4>

        <p>

          Financial Management is concerned with planning and
          controlling the financial resources of an enterprise.
          It deals with the acquisition, financing and management
          of assets with the objective of accomplishing the overall
          financial goal of the business enterprise.

        </p>


        <h5>1. Acquisition of Funds</h5>

        <p>

          Funds can be obtained from various sources such as
          owner's funds, equity, debentures, bonds, commercial banks,
          financial institutions, angel financing and venture capital.

        </p>


        <h5>2. Financing of Short-Term Requirements</h5>

        <p>

          Short-term funds are required for working capital and
          day-to-day operations such as purchase of raw materials,
          payment of wages and salaries and other current
          operating expenses.

        </p>

        <p>

          Working Capital Management deals with management of
          current assets and current liabilities.

        </p>


        <h5>3. Financing of Long-Term Requirements</h5>

        <p>

          Long-term funds are required for investment in fixed
          assets and long-term projects such as machinery, plants,
          replacement projects, new products and research and
          development.

        </p>


        <h5>4. Selection of Appropriate Sources</h5>

        <p>

          The finance manager has to consider the
          <strong>cost, risk and control</strong> associated with
          different sources of finance and establish an appropriate
          balance between equity and debt.

        </p>


        <h5>5. Effective Utilisation</h5>

        <p>

          Merely procuring funds is insufficient. They must be
          employed efficiently so that the return generated is
          adequate relative to their cost and risk.

        </p>


        <h5>Conclusion</h5>

        <p>

          Therefore, Financial Management covers both procurement
          and effective utilisation of funds for short-term and
          long-term requirements and seeks to maximise shareholders'
          wealth.

        </p>

      </div>

    </div>


    <!-- THEORY 3 -->

    <div class="theory-card">

      <div class="theory-number">
        Theory Question 3
      </div>

      <h3>

        DISCUSS the two main aspects of the finance function.

      </h3>


      <div class="answer-box theory-answer">

        <h4>Answer</h4>

        <p>

          The two basic aspects of the finance function are:

        </p>


        <h5>1. Procurement of Funds</h5>

        <p>

          Procurement of funds means obtaining the required funds
          for the enterprise from appropriate sources.

        </p>

        <p>

          Funds may be obtained through owner's funds, equity,
          debentures and bonds, commercial banks, angel financing,
          venture capital and other sources.

        </p>

        <p>

          While procuring funds, the finance manager has to consider
          <strong>cost, risk and control</strong>.

        </p>


        <h5>2. Effective Utilisation of Funds</h5>

        <p>

          The finance manager is responsible for ensuring that funds
          are properly and profitably utilised.

        </p>

        <p>

          Funds may be used for fixed assets and working capital.
          Long-term investments are evaluated through capital
          budgeting, whereas adequate working capital must be
          maintained without unnecessarily blocking funds in
          inventories, book debts and cash.

        </p>


        <h5>Conclusion</h5>

        <p>

          Thus, the finance function involves both
          <strong>procurement of funds</strong> and
          <strong>effective utilisation of funds</strong> in order
          to achieve the objectives of the enterprise.

        </p>

      </div>

    </div>


    <!-- THEORY 4 -->

    <div class="theory-card">

      <div class="theory-number">
        Theory Question 4
      </div>

      <h3>

        DISCUSS three main considerations in procuring funds.

      </h3>


      <div class="answer-box theory-answer">

        <h4>Answer</h4>

        <p>

          Funds can be obtained from different sources and each
          source has different characteristics. Therefore, while
          procuring funds, the finance manager should consider the
          following three important factors:

        </p>


        <h5>1. Cost</h5>

        <p>

          The finance manager should determine the cost associated
          with each source of finance and attempt to keep the cost
          of funds at an appropriate minimum level.

        </p>

        <p>

          For example, debentures may be comparatively cheaper
          because interest enjoys a tax advantage, whereas equity
          is generally a relatively expensive source.

        </p>


        <h5>2. Risk</h5>

        <p>

          Different sources of finance create different levels of
          financial risk.

        </p>

        <p>

          Debt creates fixed obligations such as interest and
          repayment of principal, even when profits are low.
          Excessive debt can therefore increase financial risk.

        </p>


        <h5>3. Control</h5>

        <p>

          The finance manager must consider the impact of a new
          source of finance on the control of existing shareholders.

        </p>

        <p>

          For example, issue of fresh equity shares may dilute the
          control of existing shareholders.

        </p>


        <h5>Conclusion</h5>

        <p>

          Therefore, procurement of funds involves balancing
          <strong>cost, risk and control</strong> and determining
          a suitable equity-debt structure.

        </p>

      </div>

    </div>


    <!-- THEORY 5 -->

    <div class="theory-card">

      <div class="theory-number">
        Theory Question 5
      </div>

      <h3>

        EXPLAIN “Wealth maximisation” and “Profit maximisation”
        objectives of financial management.

      </h3>


      <div class="answer-box theory-answer">

        <h4>Answer</h4>


        <h5>A. Profit Maximisation</h5>

        <p>

          Profit maximisation traditionally considers earning
          maximum profit as the primary objective of a company.
          Accordingly, the finance manager evaluates alternative
          decisions according to their effect on profits.

        </p>


        <h5>Limitations of Profit Maximisation</h5>

        <p><strong>1. Profit is vague:</strong></p>

        <p>

          Profit may refer to short-term profit, long-term profit,
          total profit or rate of profit.

        </p>

        <p><strong>2. Ignores risk and uncertainty:</strong></p>

        <p>

          High-profit proposals may involve high risk. If profit is
          considered alone, risky alternatives may be accepted
          without adequate consideration of risk.

        </p>

        <p><strong>3. Ignores timing of returns:</strong></p>

        <p>

          It does not adequately consider whether returns are received
          earlier or much later.

        </p>

        <p><strong>4. Too narrow:</strong></p>

        <p>

          It may ignore social considerations and obligations towards
          workers, consumers, society and ethical business practices.

        </p>


        <h5>B. Wealth / Value Maximisation</h5>

        <p>

          Wealth maximisation seeks to maximise the market value
          of the firm and shareholders' wealth.

        </p>

        <p>

          It is based on:

        </p>

        <ul>

          <li>Cash Flow Approach</li>

          <li>Cost-Benefit Analysis</li>

          <li>Time Value of Money</li>

        </ul>


        <p>

          Wealth can be represented as:

        </p>

        <div class="formula-box">
          Wealth = Present Value of Benefits − Present Value of Costs
        </div>


        <h5>Comparison</h5>

        <div class="table-wrap">

          <table>

            <thead>

              <tr>
                <th>Basis</th>
                <th>Profit Maximisation</th>
                <th>Wealth Maximisation</th>
              </tr>

            </thead>


            <tbody>

              <tr>

                <td>Focus</td>

                <td>
                  Large amount of profits
                </td>

                <td>
                  Highest market value of shares
                </td>

              </tr>


              <tr>

                <td>Time</td>

                <td>
                  Short-term gains
                </td>

                <td>
                  Long-term gains
                </td>

              </tr>


              <tr>

                <td>Risk</td>

                <td>
                  Ignores risk / uncertainty
                </td>

                <td>
                  Recognises risk / uncertainty
                </td>

              </tr>


              <tr>

                <td>Timing</td>

                <td>
                  Ignores timing
                </td>

                <td>
                  Recognises timing
                </td>

              </tr>


              <tr>

                <td>Shareholder return</td>

                <td>
                  Limited perspective
                </td>

                <td>
                  Considers shareholders' return
                </td>

              </tr>

            </tbody>

          </table>

        </div>


        <h5>Conclusion</h5>

        <p>

          In today's uncertain and multi-period environment,
          wealth maximisation is generally considered a better
          objective than profit maximisation because it incorporates
          risk, timing of returns and the value of cash flows.

        </p>

      </div>

    </div>


    <!-- THEORY 6 -->

    <div class="theory-card">

      <div class="theory-number">
        Theory Question 6
      </div>

      <h3>

        DISCUSS the role of a chief financial officer.

      </h3>


      <div class="answer-box theory-answer">

        <h4>Answer</h4>

        <p>

          In the modern business environment, the Chief Financial
          Officer or Finance Executive plays a vital role in the
          financial success and strategic direction of the enterprise.

        </p>


        <h5>1. Financial Analysis and Planning</h5>

        <p>

          The finance executive determines the appropriate amount
          of funds to be employed and considers the size and rate
          of growth of the enterprise.

        </p>


        <h5>2. Investment Decisions</h5>

        <p>

          The CFO is responsible for efficient allocation of funds
          to specific assets and evaluation of investment proposals.

        </p>


        <h5>3. Financing and Capital Structure Decisions</h5>

        <p>

          The CFO raises funds on favourable terms and determines
          the appropriate composition of liabilities, considering
          equity, debt, cost and risk.

        </p>


        <h5>4. Management of Financial Resources</h5>

        <p>

          The finance executive manages financial resources such
          as working capital and ensures that funds are properly
          utilised.

        </p>


        <h5>5. Risk Management</h5>

        <p>

          The CFO works to protect the firm's assets and manage
          financial risks.

        </p>


        <h5>Changing Role of the CFO</h5>

        <p>

          The modern CFO is no longer confined to traditional
          accounting, financial reporting and treasury activities.

          The modern role also includes:

        </p>

        <ul>

          <li>Mergers and acquisitions</li>

          <li>Profitability analysis</li>

          <li>Pricing analysis</li>

          <li>Outsourcing decisions</li>

          <li>Strategic planning</li>

          <li>Regulatory compliance</li>

          <li>IT and HR oversight</li>

          <li>Risk management</li>

        </ul>


        <h5>Conclusion</h5>

        <p>

          Thus, the modern CFO acts as a
          <strong>strategic business partner</strong> and contributes
          to sustainable growth while protecting the financial
          interests of the enterprise.

        </p>

      </div>

    </div>


    <!-- THEORY 7 -->

    <div class="theory-card">

      <div class="theory-number">
        Theory Question 7
      </div>

      <h3>

        In recent years, there have been a number of environmental,
        pollution and other regulations imposed on businesses.
        In view of these changes, is maximisation of shareholder
        wealth still a realistic objective? EXPLAIN.

      </h3>


      <div class="answer-box theory-answer">

        <h4>Answer</h4>

        <p>

          Shareholder wealth maximisation remains a realistic and
          important objective of Financial Management even though
          businesses are subject to increasing environmental,
          pollution and other regulations.

        </p>


        <h5>1. Wealth Maximisation is a Long-Term Objective</h5>

        <p>

          Shareholder wealth maximisation focuses on the long-term
          market value of the enterprise rather than merely
          short-term accounting profits.

        </p>


        <h5>2. Regulatory and Social Obligations Affect Value</h5>

        <p>

          Environmental and pollution regulations impose additional
          costs and constraints on businesses. These factors form
          part of the economic environment in which financial
          decisions are made.

        </p>

        <p>

          A business that ignores its social and regulatory
          responsibilities may face penalties, reputational damage,
          loss of customers and reduced future profitability.

        </p>


        <h5>3. Wealth Maximisation is Broader than Short-Term Profit</h5>

        <p>

          Profit maximisation may be achieved through short-term
          actions that damage long-term performance.

          Wealth maximisation considers the long-term effects of
          business decisions.

        </p>


        <h5>4. Stakeholder Considerations</h5>

        <p>

          Wealth maximisation is generally consistent with the
          interests of different stakeholders such as owners,
          employees, creditors, customers, government and society.

        </p>


        <h5>5. Risk and Uncertainty</h5>

        <p>

          The wealth maximisation approach recognises risk,
          uncertainty and the timing of returns.

          Therefore, regulatory requirements and environmental risks
          can be incorporated into rational financial decision-making.

        </p>


        <h5>6. Long-Term Survival</h5>

        <p>

          The primary objective of wealth maximisation does not
          require the enterprise to ignore legal, environmental or
          social responsibilities.

          Rather, compliance with these requirements can be necessary
          for sustainable growth and long-term survival.

        </p>


        <h5>Conclusion</h5>

        <p>

          Therefore, despite increasing environmental, pollution and
          other regulations, shareholder wealth maximisation remains
          a realistic and appropriate objective, provided that
          financial decisions consider applicable regulations,
          risk, timing, stakeholder interests and the long-term
          sustainability of the enterprise.

        </p>

      </div>

    </div>


  </div>

</div>



      </div>

    </div>
  `
};


const concepts = [

  [
    'Financial Management',
    `Financial Management is a managerial activity concerned with
    planning and controlling financial resources and with acquiring,
    financing and managing assets to accomplish the overall goal of
    the enterprise.`
  ],

  [
    'Two Basic Aspects',
    `Procurement of funds + effective utilisation of funds.`
  ],

  [
    'Three Major Financial Decisions',
    `Investment Decision = where to invest.
    Financing Decision = where to obtain funds.
    Dividend Decision = how much to distribute and retain.`
  ],

  [
    'Short-term Finance Decision',
    `Working Capital Management concerns management of current assets
    and current liabilities.`
  ],

  [
    'Procurement Lens',
    `Funding sources must be evaluated on cost, risk and control,
    with an appropriate equity-debt structure.`
  ],

  [
    'Equity vs Debt',
    `Equity generally has no fixed repayment obligation and may dilute
    control. Debt may be cheaper because of interest tax advantage
    but creates fixed financial obligations and greater financial risk.`
  ],

  [
    'Evolution of Financial Management',
    `Traditional = occasional events.
    Transitional = day-to-day financial problems.
    Modern = broad financial analysis and decision-making.`
  ],

  [
    'Importance',
    `Avoid over-investment in fixed assets, balance cash inflows and
    outflows, maintain working capital, set sales targets, improve
    gross profit, control expenses and plan taxes.`
  ],

  [
    'Scope',
    `Determination of size and growth, asset composition, financing
    mix and analysis, planning and control of financial affairs.`
  ],

  [
    'Profit Maximisation',
    `Profit maximisation is a limited objective because profit is vague,
    risk is ignored, timing of returns is ignored and the objective is
    too narrow.`
  ],

  [
    'Wealth Maximisation',
    `Wealth maximisation focuses on market value and considers cash flow,
    cost-benefit analysis, risk and time value of money.`
  ],

  [
    'Risk–Return Trade-off',
    `A greater expected return generally requires acceptance of greater
    risk. Investment decisions should therefore consider both risk
    and return.`
  ],

  [
    'Finance Executive',
    `Financial analysis and planning, investment, financing and capital
    structure, financial resources and risk management.`
  ],

  [
    'Financial Distress',
    `Cash inflows are inadequate to meet current obligations.`
  ],

  [
    'Insolvency',
    `Inability to repay debts resulting from continuing financial
    distress.`
  ],

  [
    'FM vs Accounting',
    `Accounting is primarily accrual-based and presents financial
    information; Financial Management is cash-flow oriented and uses
    information for planning, control and decision-making.`
  ],

  [
    'Related Disciplines',
    `Economics, Accounting, Production, Marketing and Quantitative
    Methods support Financial Management.`
  ],

  [
    'Agency Problem',
    `The possibility that managers place personal objectives ahead of
    the objectives of owners because of separation between ownership
    and management.`
  ],

  [
    'Agency Cost',
    `Additional cost incurred by shareholders to monitor/control
    managers. Types: Monitoring, Bonding, Opportunity and Structuring.`
  ]

];


const formulas = [

  {
    title: 'Value of the Firm — Decision Function',
    formula: 'V = f (I, F, D)',
    note:
      'V = Value of the firm; I = Investment Decision; ' +
      'F = Financing Decision; D = Dividend Decision.'
  },

  {
    title: 'Wealth',
    formula: 'Wealth = PV of Benefits − PV of Costs',
    note:
      'The wealth approach adjusts benefits and costs for timing and risk.'
  },

  {
    title: 'Value of Firm — Market Value',
    formula: 'V = N × MP',
    note:
      'N = Number of shares; MP = Market price per share.'
  },

  {
    title: 'Value of Firm — Equity + Debt',
    formula: 'V = Ve + Vd',
    note:
      'Ve = Value of equity; Vd = Value of debt.'
  }

];


function storyHTML() {

  return `

    <div class="story-card">

      <h3>
        Arun Foods Ltd. — A Complete Chapter 1 Integrated Case
      </h3>


      <p>
        Arun wants to establish a packaged-food manufacturing company
        called <strong>Arun Foods Ltd.</strong>
      </p>

      <p>
        He has studied the market and believes the business can grow,
        but before he orders even one machine, his finance adviser
        tells him that business decisions involving money must be
        approached through <strong>Financial Management</strong>.
      </p>


      <h4>1. Selection of Assets — The First Decision</h4>

      <p>
        Arun determines the assets required to start the business.
      </p>

      <div class="story-value">

        <div class="value-box">
          <div class="value-label">Factory Premises</div>
          <div class="value-number">₹60 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Machinery</div>
          <div class="value-number">₹70 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Equipment</div>
          <div class="value-number">₹20 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Initial Inventory</div>
          <div class="value-number">₹20 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Operating Cash</div>
          <div class="value-number">₹10 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Total Requirement</div>
          <div class="value-number">₹1.80 crore</div>
        </div>

      </div>


      <p>
        Arun's first question is:
      </p>

      <blockquote>
        "Where should the money be invested?"
      </blockquote>

      <p>
        This is the <strong>Investment Decision</strong>.
        The decision involves the selection of assets and the
        determination of the total investment required.
      </p>


      <h4>2. Working Capital Requirement</h4>

      <p>
        Arun soon realises that the factory cannot survive merely
        because it owns machinery. Every day, the business needs
        money to purchase raw materials and to pay salaries and wages.
      </p>

      <p>
        He estimates that the business needs an operating
        <strong>Working Capital</strong> cushion of
        <strong>₹30 lakh</strong>.
      </p>

      <p>
        Therefore, Financial Management is not only concerned with
        fixed assets. It also includes the management of current
        assets and current liabilities and the continuous financing
        of the operating cycle.
      </p>


      <h4>3. Procurement of Funds — The Financing Gap</h4>

      <p>
        Arun has only <strong>₹80 lakh</strong> of his own funds.
        But the total requirement is <strong>₹1.80 crore</strong>.
      </p>

      <div class="story-value">

        <div class="value-box">
          <div class="value-label">Total Requirement</div>
          <div class="value-number">₹1.80 crore</div>
        </div>

        <div class="value-box">
          <div class="value-label">Own Funds</div>
          <div class="value-number">₹80 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Financing Gap</div>
          <div class="value-number">₹1 crore</div>
        </div>

      </div>


      <p>
        He considers issuing <strong>₹60 lakh of equity</strong>
        and obtaining <strong>₹40 lakh of debt</strong>.
      </p>


      <div class="story-value">

        <div class="value-box">
          <div class="value-label">Own Funds</div>
          <div class="value-number">₹80 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">New Equity</div>
          <div class="value-number">₹60 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Debt</div>
          <div class="value-number">₹40 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Total Finance</div>
          <div class="value-number">₹1.80 crore</div>
        </div>

      </div>


      <p>
        Arun has now answered:
      </p>

      <blockquote>
        "Where will the money come from?"
      </blockquote>

      <p>
        This is the <strong>Financing Decision</strong>.
      </p>


      <h4>4. Cost + Risk + Control</h4>

      <p>
        Arun cannot choose finance merely because it is available.
        He has to compare the sources in terms of
        <strong>Cost, Risk and Control</strong>.
      </p>

      <p>
        Equity is comparatively safer from the fixed-repayment point
        of view, but it is generally a more expensive source and a
        fresh issue can dilute the control of existing shareholders.
      </p>

      <p>
        Debt may be comparatively cheaper because interest has a
        tax advantage, but interest must be paid even when profits
        are low or absent, and the principal must be repaid according
        to the terms.
      </p>

      <p>
        Arun therefore understands the importance of an appropriate
        <strong>Capital Structure</strong>.
      </p>


      <h4>5. Effective Utilisation of Funds</h4>

      <p>
        After obtaining funds, Arun makes another mistake.
        He initially considers spending <strong>₹1.50 crore</strong>
        on fixed assets and keeping only <strong>₹5 lakh</strong>
        readily available for operating requirements.
      </p>

      <p>
        Two weeks after opening, the business requires
        <strong>₹8 lakh of raw materials</strong> and
        <strong>₹4 lakh for wages and salaries</strong>.
      </p>

      <div class="story-value">

        <div class="value-box">
          <div class="value-label">Immediate Cash Available</div>
          <div class="value-number">₹5 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Immediate Requirement</div>
          <div class="value-number">₹12 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Shortfall</div>
          <div class="value-number">₹7 lakh</div>
        </div>

      </div>

      <p>
        Arun now understands why Financial Management is concerned
        with <strong>effective utilisation of funds</strong>.
        Excessive concentration of funds in fixed assets can starve
        working capital.
      </p>


      <h4>6. Capital Budgeting / Investment Appraisal</h4>

      <p>
        Arun then considers an automated packing machine costing
        <strong>₹25 lakh</strong>.
      </p>

      <p>
        The machine is expected to generate operating cash inflows
        of <strong>₹9 lakh per year for five years</strong>.
      </p>

      <div class="story-value">

        <div class="value-box">
          <div class="value-label">Machine Cost</div>
          <div class="value-number">₹25 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Annual Cash Inflow</div>
          <div class="value-number">₹9 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Period</div>
          <div class="value-number">5 Years</div>
        </div>

      </div>

      <p>
        Arun does not simply ask, "Will accounting profit increase?"
        He asks whether the long-term investment provides the desired
        return. This is <strong>Capital Budgeting / Investment
        Appraisal</strong>.
      </p>


      <h4>7. Evolution of Financial Management</h4>

      <p>
        Arun's CFO explains how Financial Management evolved.
      </p>

      <div class="three-grid">

        <div class="mini-card">

          <h5>Traditional Phase</h5>

          <p>
            Financial Management was largely concerned with
            <strong>occasional events</strong> such as takeovers,
            mergers, expansion and liquidation.
          </p>

        </div>

        <div class="mini-card">

          <h5>Transitional Phase</h5>

          <p>
            Attention moved towards
            <strong>day-to-day financial problems</strong>,
            including funds analysis, financial planning and control.
          </p>

        </div>

        <div class="mini-card">

          <h5>Modern Phase</h5>

          <p>
            The scope expanded to financial analysis, capital
            budgeting, efficient markets, option pricing and
            valuation models.
          </p>

        </div>

      </div>


      <h4>8. The Three Finance Decisions Become One System</h4>

      <p>
        Arun's CFO now gives him the central FM map:
      </p>

      <blockquote>

        <strong>Investment</strong> =
        Where should the money be invested?

        <br><br>

        <strong>Financing</strong> =
        Where should the money come from?

        <br><br>

        <strong>Dividend</strong> =
        How much should be distributed to shareholders?

      </blockquote>


      <p>
        The value relationship is:
      </p>

      <div class="formula-box">
        V = f (I, F, D)
      </div>


      <p>
        Suppose Arun Foods earns <strong>₹20 lakh</strong> profit
        in its first profitable year.
      </p>

      <p>
        Arun decides to distribute <strong>₹8 lakh</strong> as
        dividend and retain <strong>₹12 lakh</strong> for growth.
      </p>


      <div class="story-value">

        <div class="value-box">
          <div class="value-label">Profit</div>
          <div class="value-number">₹20 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Dividend</div>
          <div class="value-number">₹8 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Retained</div>
          <div class="value-number">₹12 lakh</div>
        </div>

      </div>


      <h4>9. Working Capital — Short-Term Finance Decision</h4>

      <p>
        At the end of one month, Arun has:
      </p>

      <div class="story-value">

        <div class="value-box">
          <div class="value-label">Cash</div>
          <div class="value-number">₹8 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Inventory</div>
          <div class="value-number">₹15 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Receivables</div>
          <div class="value-number">₹12 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Current Liabilities</div>
          <div class="value-number">₹20 lakh</div>
        </div>

      </div>


      <p>
        Therefore:
      </p>

      <div class="formula-box">
        Current Assets = ₹8 + ₹15 + ₹12 = ₹35 lakh
      </div>

      <div class="formula-box">
        Working Capital = ₹35 lakh − ₹20 lakh = ₹15 lakh
      </div>


      <p>
        This demonstrates why Working Capital Management belongs
        to the short-term finance decision.
      </p>


      <h4>10. Why Profit Maximisation Is a Limited Objective</h4>

      <p>
        Arun's accountant says:
      </p>

      <blockquote>
        "Simply choose the project that produces the highest profit."
      </blockquote>


      <div class="story-value">

        <div class="value-box">

          <div class="value-label">
            Project A
          </div>

          <div class="value-number">
            ₹10 lakh profit
          </div>

          <div class="value-label">
            Low Risk
          </div>

        </div>


        <div class="value-box">

          <div class="value-label">
            Project B
          </div>

          <div class="value-number">
            ₹15 lakh profit
          </div>

          <div class="value-label">
            High Risk
          </div>

        </div>

      </div>


      <p>
        A pure profit-maximisation approach selects Project B.
        But Arun asks:
      </p>

      <blockquote>
        "What is the additional risk I am accepting for the extra
        ₹5 lakh of profit?"
      </blockquote>


      <p>
        This is the <strong>Risk–Return Trade-off</strong>.
      </p>


      <h4>11. Timing of Returns</h4>

      <p>
        Arun now compares another two alternatives.
      </p>

      <div class="story-value">

        <div class="value-box">

          <div class="value-label">
            Project C
          </div>

          <div class="value-number">
            ₹12 lakh
          </div>

          <div class="value-label">
            Received after 1 year
          </div>

        </div>


        <div class="value-box">

          <div class="value-label">
            Project D
          </div>

          <div class="value-number">
            ₹15 lakh
          </div>

          <div class="value-label">
            Received after 8 years
          </div>

        </div>

      </div>


      <p>
        A simple comparison of total profits would favour Project D.
        But Financial Management recognises that the
        <strong>timing of returns</strong> matters.
      </p>


      <h4>12. Four Limitations — VRTN</h4>

      <div class="three-grid">

        <div class="mini-card">
          <h5>V — Vague</h5>
          <p>
            Profit may mean short-term, long-term, total profit
            or rate of profit.
          </p>
        </div>

        <div class="mini-card">
          <h5>R — Risk</h5>
          <p>
            Higher profit may involve higher risk or uncertainty.
          </p>
        </div>

        <div class="mini-card">
          <h5>T — Timing</h5>
          <p>
            The timing of returns is ignored under a pure profit
            maximisation approach.
          </p>
        </div>

        <div class="mini-card">
          <h5>N — Narrow</h5>
          <p>
            Wider obligations towards workers, consumers,
            society and ethics may be ignored.
          </p>
        </div>

      </div>


      <h4>13. Wealth / Value Maximisation</h4>

      <p>
        Arun therefore changes the objective from merely maximising
        accounting profit to <strong>Wealth / Value Maximisation</strong>.
      </p>

      <p>
        The finance manager now concentrates on:
      </p>

      <div class="story-value">

        <div class="value-box">
          <div class="value-label">
            Cash Flow Approach
          </div>
          <div class="value-number">
            Cash focus
          </div>
        </div>

        <div class="value-box">
          <div class="value-label">
            Cost-Benefit Analysis
          </div>
          <div class="value-number">
            Benefits vs Costs
          </div>
        </div>

        <div class="value-box">
          <div class="value-label">
            Time Value of Money
          </div>
          <div class="value-number">
            Timing matters
          </div>
        </div>

      </div>


      <p>
        Suppose a project requires an investment of
        <strong>₹10 lakh</strong>.
      </p>

      <p>
        Its present value of benefits is estimated at
        <strong>₹14 lakh</strong>.
      </p>

      <div class="formula-box">
        Wealth = PV of Benefits − PV of Costs
      </div>

      <div class="formula-box">
        Wealth = ₹14 lakh − ₹10 lakh = ₹4 lakh
      </div>


      <p>
        Arun therefore sees that the project creates a positive
        value of <strong>₹4 lakh</strong> on this simplified basis.
      </p>


      <h4>14. Market Value of the Firm</h4>

      <p>
        Arun Foods now has <strong>10 lakh shares</strong> and the
        market price is <strong>₹40 per share</strong>.
      </p>

      <div class="formula-box">
        V = N × MP
      </div>

      <div class="formula-box">
        V = 10 lakh × ₹40 = ₹4 crore
      </div>

      <p>
        The chapter also presents:
      </p>

      <div class="formula-box">
        V = Ve + Vd
      </div>


      <h4>15. The Risk–Return Trade-off Becomes Real</h4>

      <p>
        Arun compares two products:
      </p>

      <div class="story-value">

        <div class="value-box">

          <div class="value-label">
            Product X
          </div>

          <div class="value-number">
            ₹50,000
          </div>

          <div class="value-label">
            Lower Risk
          </div>

        </div>


        <div class="value-box">

          <div class="value-label">
            Product Y
          </div>

          <div class="value-number">
            ₹55,000
          </div>

          <div class="value-label">
            Higher Risk
          </div>

        </div>

      </div>


      <p>
        Profit maximisation alone selects Product Y.
        Wealth maximisation asks whether the additional return is
        sufficient to compensate shareholders for the additional risk.
      </p>


      <h4>16. The Finance Executive / CFO</h4>

      <p>
        As Arun Foods grows, Arun appoints a
        <strong>Chief Financial Officer</strong>.
      </p>

      <p>
        The CFO is responsible for:
      </p>

      <ul>

        <li>Financial Analysis and Planning</li>

        <li>Investment Decisions</li>

        <li>Financing and Capital Structure Decisions</li>

        <li>Management of Financial Resources</li>

        <li>Risk Management</li>

      </ul>


      <p>
        In the modern business environment, the CFO also contributes
        to:
      </p>

      <ul>

        <li>Mergers and Acquisitions</li>

        <li>Profitability Analysis</li>

        <li>Pricing Analysis</li>

        <li>Outsourcing Decisions</li>

        <li>IT Oversight</li>

        <li>HR Oversight</li>

        <li>Strategic Planning</li>

        <li>Regulatory Compliance</li>

        <li>Risk Management</li>

      </ul>


      <p>
        The CFO therefore becomes a
        <strong>Strategic Business Partner</strong>.
      </p>


      <h4>17. Financial Distress</h4>

      <p>
        One year later, Arun Foods has cash inflows of
        <strong>₹6 lakh</strong>, while current obligations due are
        <strong>₹10 lakh</strong>.
      </p>

      <div class="story-value">

        <div class="value-box">
          <div class="value-label">Cash Inflows</div>
          <div class="value-number">₹6 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Current Obligations</div>
          <div class="value-number">₹10 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Shortfall</div>
          <div class="value-number">₹4 lakh</div>
        </div>

      </div>


      <p>
        Cash inflows are inadequate to meet current obligations.
        Arun Foods is therefore experiencing
        <strong>Financial Distress</strong>.
      </p>


      <h4>18. Insolvency</h4>

      <p>
        Suppose the distress continues for a prolonged period.
        The company sells assets, but revenues remain insufficient
        and eventually the company becomes unable to repay its debts.
      </p>

      <p>
        The company has reached
        <strong>Insolvency</strong>.
      </p>

      <div class="callout">

        Financial Distress → inadequate cash inflows

        <br><br>

        Continuing Distress → increasing inability to meet obligations

        <br><br>

        Insolvency → inability to repay debts

      </div>


      <h4>19. Accounting Profit Does Not Automatically Mean Cash</h4>

      <p>
        The accountant reports:
      </p>

      <div class="story-value">

        <div class="value-box">
          <div class="value-label">Accounting Profit</div>
          <div class="value-number">₹25 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Cash Collected</div>
          <div class="value-number">₹8 lakh</div>
        </div>

        <div class="value-box">
          <div class="value-label">Receivables</div>
          <div class="value-number">₹17 lakh</div>
        </div>

      </div>


      <p>
        Arun now understands the difference between Accounting and
        Financial Management.
      </p>

      <p>
        <strong>Accounting</strong> follows the
        <strong>accrual principle</strong> and primarily collects
        and presents financial information.
      </p>

      <p>
        <strong>Financial Management</strong> focuses on
        <strong>cash flows</strong> and uses financial information
        for planning, control and decision-making.
      </p>


      <blockquote>
        Financial management begins where accounting ends.
      </blockquote>


      <h4>20. Other Disciplines</h4>

      <p>
        Arun launches a new product.
      </p>

      <ul>

        <li>
          Marketing requires <strong>₹5 lakh</strong> for promotion.
        </li>

        <li>
          Production requires <strong>₹15 lakh</strong> of new equipment.
        </li>

        <li>
          Quantitative methods help analyse alternative investment
          choices.
        </li>

        <li>
          Economics helps the finance manager understand the
          external environment.
        </li>

        <li>
          Accounting supplies financial information.
        </li>

      </ul>


      <p>
        Therefore, Financial Management draws upon
        <strong>
          Economics, Accounting, Production, Marketing and
          Quantitative Methods
        </strong>.
      </p>


      <h4>21. Agency Problem</h4>

      <p>
        Arun is now the major shareholder, but professional managers
        operate the company.
      </p>

      <p>
        The shareholders want:
      </p>

      <blockquote>
        "Maximise our wealth."
      </blockquote>

      <p>
        One manager, however, wants a luxury office, personal perks
        and a large budget even though these decisions do not create
        shareholder value.
      </p>

      <p>
        There is a <strong>Separation of Ownership and Management</strong>.
      </p>

      <p>
        The possibility that managers place personal objectives ahead
        of owners' objectives is the
        <strong>Agency Problem</strong>.
      </p>


      <h4>22. Agency Cost</h4>

      <p>
        Arun introduces monitoring systems, performance-linked
        compensation and internal controls.
      </p>

      <p>
        The associated agency costs are understood through:
      </p>

      <div class="story-value">

        <div class="value-box">
          <div class="value-label">1</div>
          <div class="value-number">Monitoring</div>
        </div>

        <div class="value-box">
          <div class="value-label">2</div>
          <div class="value-number">Bonding</div>
        </div>

        <div class="value-box">
          <div class="value-label">3</div>
          <div class="value-number">Opportunity</div>
        </div>

        <div class="value-box">
          <div class="value-label">4</div>
          <div class="value-number">Structuring</div>
        </div>

      </div>


      <h4>23. Mitigation of Agency Problem</h4>

      <p>
        For debt lenders, Arun uses
        <strong>negative covenants</strong> to restrict excessive
        borrowing.
      </p>

      <p>
        For managers, compensation is linked partly to company
        performance and long-term objectives, supported by
        effective monitoring.
      </p>


      <h4>24. The Complete Financial Management Picture</h4>

      <p>
        Arun's business has now travelled through the complete
        Chapter 1 framework:
      </p>


      <div class="tag-row">

        <span class="story-chip">
          Selection of Assets
        </span>

        <span class="story-chip">
          Investment Decision
        </span>

        <span class="story-chip">
          Working Capital
        </span>

        <span class="story-chip">
          Procurement of Funds
        </span>

        <span class="story-chip">
          Financing Decision
        </span>

        <span class="story-chip">
          Cost
        </span>

        <span class="story-chip">
          Risk
        </span>

        <span class="story-chip">
          Control
        </span>

        <span class="story-chip">
          Capital Structure
        </span>

        <span class="story-chip">
          Dividend Decision
        </span>

        <span class="story-chip">
          Profit Maximisation
        </span>

        <span class="story-chip">
          Wealth Maximisation
        </span>

        <span class="story-chip">
          Cash Flow
        </span>

        <span class="story-chip">
          Cost-Benefit Analysis
        </span>

        <span class="story-chip">
          Time Value of Money
        </span>

        <span class="story-chip">
          Risk–Return
        </span>

        <span class="story-chip">
          Finance Executive
        </span>

        <span class="story-chip">
          Financial Distress
        </span>

        <span class="story-chip">
          Insolvency
        </span>

        <span class="story-chip">
          Accounting
        </span>

        <span class="story-chip">
          Agency Problem
        </span>

        <span class="story-chip">
          Agency Cost
        </span>

        <span class="story-chip">
          Mitigation
        </span>

      </div>


      <div class="story-card story-end">

        <h4>
          Final Memory Chain
        </h4>

        <p>

          <strong>
            Investment
            →
            Working Capital
            →
            Procurement
            →
            Cost / Risk / Control
            →
            Capital Structure
            →
            Utilisation
            →
            Traditional
            →
            Transitional
            →
            Modern
            →
            Investment / Financing / Dividend
            →
            Profit Maximisation
            →
            V-R-T-N
            →
            Wealth Maximisation
            →
            Cash Flow / Cost-Benefit / TVM
            →
            Risk–Return
            →
            CFO
            →
            Financial Distress
            →
            Insolvency
            →
            Accounting vs Financial Management
            →
            Other Disciplines
            →
            Agency Problem
            →
            Agency Cost
            →
            Mitigation
          </strong>

        </p>

      </div>

    </div>

  `;

}
const mindMapHTML = `


        <div class="mindmap">

            <details open>
                <summary>
                    💰 Financial Management
                </summary>

                <div class="mindmap-children">

                    <details>
                        <summary>
                            💵 Procurement of Funds
                        </summary>

                        <div class="mindmap-items">

                            <div>Cost</div>
                            <div>Risk</div>
                            <div>Control</div>
                            <div>Equity</div>
                            <div>Debentures</div>
                            <div>Commercial Banks</div>
                            <div>International Funding</div>
                            <div>Angel Financing</div>
                            <div>Venture Capital</div>

                        </div>

                    </details>


                    <details>
                        <summary>
                            📦 Utilisation of Funds
                        </summary>

                        <div class="mindmap-items">

                            <div>Fixed Assets</div>
                            <div>Capital Budgeting</div>
                            <div>Working Capital</div>
                            <div>Optimum Utilisation</div>

                        </div>

                    </details>


                    <details open>
                        <summary>
                            🎯 Finance Decisions
                        </summary>

                        <div class="mindmap-children">

                            <details>
                                <summary>
                                    Investment Decision
                                </summary>

                                <div class="mindmap-items">

                                    <div>Selection of Assets</div>
                                    <div>Fixed Assets</div>
                                    <div>Current Assets</div>
                                    <div>Capital Budgeting</div>

                                </div>

                            </details>


                            <details>
                                <summary>
                                    Financing Decision
                                </summary>

                                <div class="mindmap-items">

                                    <div>Sources of Funds</div>
                                    <div>Cost</div>
                                    <div>Risk</div>
                                    <div>Capital Structure</div>
                                    <div>Equity</div>
                                    <div>Debt</div>

                                </div>

                            </details>


                            <details>
                                <summary>
                                    Dividend Decision
                                </summary>

                                <div class="mindmap-items">

                                    <div>Dividend</div>
                                    <div>Retained Earnings</div>
                                    <div>Growth</div>

                                </div>

                            </details>


                            <details>
                                <summary>
                                    Working Capital Management
                                </summary>

                                <div class="mindmap-items">

                                    <div>Current Assets</div>
                                    <div>Current Liabilities</div>
                                    <div>Short-Term Finance</div>

                                </div>

                            </details>

                        </div>

                    </details>


                    <details>
                        <summary>
                            📈 Evolution of Financial Management
                        </summary>

                        <div class="mindmap-items">

                            <div>Traditional Phase</div>
                            <div>Transitional Phase</div>
                            <div>Modern Phase</div>

                        </div>

                    </details>


                    <details>
                        <summary>
                            📊 Importance & Scope
                        </summary>

                        <div class="mindmap-items">

                            <div>Investment Control</div>
                            <div>Cash Flow Management</div>
                            <div>Working Capital</div>
                            <div>Sales Targets</div>
                            <div>Pricing</div>
                            <div>Expense Control</div>
                            <div>Tax Planning</div>
                            <div>Size & Growth</div>
                            <div>Asset Composition</div>
                            <div>Financing Mix</div>

                        </div>

                    </details>


                    <details open>
                        <summary>
                            🏆 Objectives
                        </summary>

                        <div class="mindmap-children">

                            <details>
                                <summary>
                                    Profit Maximisation
                                </summary>

                                <div class="mindmap-items">

                                    <div>Vague Profit</div>
                                    <div>Risk</div>
                                    <div>Timing</div>
                                    <div>Narrow Objective</div>

                                </div>

                            </details>


                            <details>
                                <summary>
                                    Wealth / Value Maximisation
                                </summary>

                                <div class="mindmap-items">

                                    <div>Cash Flow Approach</div>
                                    <div>Cost-Benefit Analysis</div>
                                    <div>Time Value of Money</div>
                                    <div>Market Value</div>

                                </div>

                            </details>


                            <details>
                                <summary>
                                    Risk–Return Trade-off
                                </summary>

                                <div class="mindmap-items">

                                    <div>Risk</div>
                                    <div>Expected Return</div>

                                </div>

                            </details>

                        </div>

                    </details>


                    <details>
                        <summary>
                            👨‍💼 Finance Executive / CFO
                        </summary>

                        <div class="mindmap-items">

                            <div>Financial Analysis & Planning</div>
                            <div>Investment Decisions</div>
                            <div>Financing & Capital Structure</div>
                            <div>Financial Resources</div>
                            <div>Risk Management</div>
                            <div>Strategic Business Partner</div>

                        </div>

                    </details>


                    <details>
                        <summary>
                            🚨 Financial Distress & Insolvency
                        </summary>

                        <div class="mindmap-items">

                            <div>Inadequate Cash Inflows</div>
                            <div>Current Obligations</div>
                            <div>Continuing Distress</div>
                            <div>Inability to Repay Debts</div>
                            <div>Insolvency</div>

                        </div>

                    </details>


                    <details>
                        <summary>
                            📚 Financial Management & Accounting
                        </summary>

                        <div class="mindmap-items">

                            <div>Accrual Principle</div>
                            <div>Cash Flow</div>
                            <div>Financial Information</div>
                            <div>Planning</div>
                            <div>Control</div>
                            <div>Decision-Making</div>

                        </div>

                    </details>


                    <details>
                        <summary>
                            🌐 Related Disciplines
                        </summary>

                        <div class="mindmap-items">

                            <div>Economics</div>
                            <div>Accounting</div>
                            <div>Production</div>
                            <div>Marketing</div>
                            <div>Quantitative Methods</div>

                        </div>

                    </details>


                    <details open>
                        <summary>
                            ⚠️ Agency Problem & Agency Cost
                        </summary>

                        <div class="mindmap-children">

                            <details>
                                <summary>
                                    Agency Problem
                                </summary>

                                <div class="mindmap-items">

                                    <div>Ownership vs Management</div>
                                    <div>Managers' Personal Objectives</div>
                                    <div>Shareholders' Objectives</div>

                                </div>

                            </details>


                            <details>
                                <summary>
                                    Agency Cost
                                </summary>

                                <div class="mindmap-items">

                                    <div>Monitoring</div>
                                    <div>Bonding</div>
                                    <div>Opportunity</div>
                                    <div>Structuring</div>

                                </div>

                            </details>


                            <details>
                                <summary>
                                    Mitigation
                                </summary>

                                <div class="mindmap-items">

                                    <div>Negative Covenants</div>
                                    <div>Performance-linked Compensation</div>
                                    <div>Share-based Arrangements</div>
                                    <div>Effective Monitoring</div>

                                </div>

                            </details>

                        </div>

                    </details>

                </div>

            </details>

        </div>
    `;





window.CAChapterData = {
    topicData,
    studyData,
    concepts,
    formulas,
    storyHTML,
    mindMapHTML
};

})();