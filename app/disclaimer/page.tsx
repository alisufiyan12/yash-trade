import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Trading Disclaimer
              </h1>
              <p className="text-lg text-muted-foreground">
                Important risk disclosure and terms for YASH Trading signals
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert space-y-8">
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                  ⚠️ High Risk Warning
                </h2>
                <p className="text-yellow-700 dark:text-yellow-300 mb-0">
                  Trading in financial markets involves substantial risk of loss and is not suitable for all investors. 
                  You should carefully consider whether trading is suitable for you in light of your circumstances, knowledge, and financial resources.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4">General Risk Disclosure</h2>
                <p>
                  Trading in Quotex and other financial instruments carries a high level of risk and may not be suitable for all investors. 
                  The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment 
                  objectives, level of experience, and risk appetite.
                </p>
                <p>
                  There is a possibility that you may sustain a loss of some or all of your initial investment and therefore you should not invest money that 
                  you cannot afford to lose. You should be aware of all the risks associated with trading and seek advice from an independent financial advisor 
                  if you have any doubts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Signal Disclaimer</h2>
                <p>
                  The trading signals provided by YASH Trading are for educational and informational purposes only. They should not be considered as personalized 
                  investment advice or recommendations to buy or sell any financial instruments.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>All signals are based on technical analysis and market research</li>
                  <li>Past performance does not guarantee future results</li>
                  <li>No guarantee of profit or protection against loss</li>
                  <li>Market conditions can change rapidly, affecting signal accuracy</li>
                  <li>Always use proper risk management and position sizing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Cryptocurrency Risks</h2>
                <p>
                  Cryptocurrency trading involves additional risks including:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Extreme Volatility:</strong> Cryptocurrency prices can fluctuate dramatically within short periods</li>
                  <li><strong>Regulatory Risk:</strong> Government regulations may impact cryptocurrency markets</li>
                  <li><strong>Technology Risk:</strong> Blockchain technology is still evolving and may contain bugs or vulnerabilities</li>
                  <li><strong>Liquidity Risk:</strong> Some cryptocurrencies may have limited liquidity</li>
                  <li><strong>Security Risk:</strong> Exchange hacks and wallet security breaches can result in total loss</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Quotex Trading Risks</h2>
                <p>
                  Foreign exchange trading carries specific risks:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Leverage Risk:</strong> High leverage can amplify both profits and losses</li>
                  <li><strong>Currency Risk:</strong> Exchange rate fluctuations can affect your investment</li>
                  <li><strong>Interest Rate Risk:</strong> Changes in interest rates can impact currency values</li>
                  <li><strong>Political Risk:</strong> Political events can cause significant currency movements</li>
                  <li><strong>Counterparty Risk:</strong> Risk of broker default or insolvency</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Terms of Use</h2>
                <p>
                  By accessing YASH Trading signals through our Telegram channel or any other medium, you acknowledge and agree to the following:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>You are solely responsible for your trading decisions</li>
                  <li>You will not hold YASH Trading liable for any losses incurred</li>
                  <li>You understand that trading involves substantial risk of loss</li>
                  <li>You will conduct your own research before making any trades</li>
                  <li>You will use appropriate risk management strategies</li>
                  <li>You are of legal age and authorized to trade in your jurisdiction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Performance Disclaimers</h2>
                <p>
                  Any performance figures, statistics, or win rates mentioned are for illustrative purposes only and do not guarantee future performance. 
                  Hypothetical or simulated performance results have inherent limitations and do not represent actual trading.
                </p>
                <p>
                  Results may not include the impact of:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Broker spreads and commissions</li>
                  <li>Slippage during order execution</li>
                  <li>Market liquidity constraints</li>
                  <li>Emotional factors affecting real trading</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Regulatory Compliance</h2>
                <p>
                  YASH Trading does not provide investment advice or portfolio management services. We are not registered as an investment advisor 
                  or broker-dealer. Our signals are educational content and should not be construed as financial advice.
                </p>
                <p>
                  It is your responsibility to comply with the laws and regulations of your jurisdiction regarding financial trading and investments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p>
                  YASH Trading, its owners, operators, and affiliates shall not be liable for any direct, indirect, incidental, special, or consequential 
                  damages arising from the use of our signals or services. This includes but is not limited to trading losses, lost profits, or business interruption.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p>
                  If you have any questions about this disclaimer or our services, please contact us through our official Telegram channel or 
                  email support. Always verify you are communicating through official channels to avoid scams.
                </p>
              </section>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">
                  Final Warning
                </h3>
                <p className="text-red-700 dark:text-red-300 mb-0">
                  Never invest more than you can afford to lose. If you are not fully aware of the risks involved, 
                  please seek independent financial advice. Trading can result in the loss of your entire investment.
                </p>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-12">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 