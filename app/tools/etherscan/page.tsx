"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TxSummary {
  hash: string;
  from: string;
  to: string;
  valueEth: string;
  gasPriceGwei: string;
  timestamp: string;
}

interface AddressAnalysis {
  totalTransactions: number;
  uniqueAddressesInteracted: number;
  averageGasPriceGwei: number;
  firstSeen: string;
  lastSeen: string;
  botProbability: number;
  indicators: string[];
  transactionsSample: TxSummary[];
}

interface TransactionContext {
  txHash: string;
  from: string;
  to: string;
  valueEth: string;
  gasPriceGwei: string;
  blockNumber: string;
}

interface EtherscanResponse {
  address: string;
  analysis: AddressAnalysis;
  transactionContext?: TransactionContext;
}

export default function EtherscanAnalyzerPage() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState<EtherscanResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`/api/tools/etherscan?address=${address}`);
      if (!res.ok) {
        throw new Error("Failed to fetch analysis");
      }
      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto px-5 md:px-16 py-10 md:py-16">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link
          className="inline-flex items-center gap-2 font-mono text-[14px] text-primary hover:text-primary-fixed transition-colors w-max group"
          href="/#tools"
        >
          <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Return to Tools
        </Link>
      </div>

      {/* Header */}
      <section className="mb-12 border-b border-outline-variant pb-8">
        <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[1.1] tracking-[-0.04em] text-on-background flex items-center gap-4">
          <span className="material-symbols-outlined text-[40px] md:text-[56px] text-tertiary">
            smart_toy
          </span>
          Etherscan Bot Analyzer
        </h1>
        <p className="font-sans text-[16px] text-on-surface-variant max-w-2xl leading-[1.6] mt-4">
          Analyzes Ethereum address transaction histories to identify patterns
          indicative of automated bot activity. Uses heuristics like transaction
          frequency, address diversity, and gas price uniformity.
        </p>
      </section>

      {/* Input Form */}
      <form onSubmit={handleAnalyze} className="mb-12 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Wallet address (0x...42 chars) or Transaction hash (0x...66 chars)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="flex-grow bg-surface border border-outline-variant text-on-surface font-mono text-[14px] px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          required
          pattern="^0x[a-fA-F0-9]{40}(([a-fA-F0-9]{24})?)$"
          title="Enter a wallet address (0x + 40 hex chars) or a transaction hash (0x + 64 hex chars)"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-background font-mono text-[14px] px-8 py-3 hover:bg-primary-fixed transition-colors disabled:opacity-50 flex items-center justify-center gap-2 font-bold"
        >
          {loading ? (
            <span className="material-symbols-outlined animate-spin text-[18px]">
              sync
            </span>
          ) : (
            <span className="material-symbols-outlined text-[18px]">search</span>
          )}
          {loading ? "ANALYZING..." : "ANALYZE"}
        </button>
      </form>

      {/* Error State */}
      {error && (
        <div className="bg-secondary/10 border border-secondary text-secondary p-4 mb-8 font-mono text-[14px]">
          [ERROR] {error}
        </div>
      )}

      {/* Results Area */}
      {result && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Transaction Context — shown when input was a tx hash */}
          {result.transactionContext && (
            <div className="bg-surface border border-primary/50 p-6">
              <h3 className="font-mono text-[16px] text-on-surface mb-4 flex items-center gap-2 border-b border-outline-variant pb-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  receipt_long
                </span>
                TRANSACTION CONTEXT
              </h3>
              <p className="font-sans text-[13px] text-on-surface-variant mb-4">
                You provided a transaction hash. The sender&apos;s wallet (<code className="text-primary">{result.address}</code>) has been analyzed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 font-mono text-[13px]">
                <div>
                  <span className="text-outline">TX HASH: </span>
                  <a
                    href={`https://etherscan.io/tx/${result.transactionContext.txHash}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    {result.transactionContext.txHash}
                  </a>
                </div>
                <div>
                  <span className="text-outline">BLOCK: </span>
                  <span className="text-on-surface">{result.transactionContext.blockNumber}</span>
                </div>
                <div>
                  <span className="text-outline">FROM: </span>
                  <span className="text-on-surface break-all">{result.transactionContext.from}</span>
                </div>
                <div>
                  <span className="text-outline">TO: </span>
                  <span className="text-on-surface break-all">{result.transactionContext.to}</span>
                </div>
                <div>
                  <span className="text-outline">VALUE: </span>
                  <span className="text-on-surface">{result.transactionContext.valueEth} ETH</span>
                </div>
                <div>
                  <span className="text-outline">GAS PRICE: </span>
                  <span className="text-on-surface">{result.transactionContext.gasPriceGwei} GWEI</span>
                </div>
              </div>
            </div>
          )}

          {/* Analyzed Address Banner */}
          {result.transactionContext && (
            <div className="bg-surface-high border border-outline-variant p-3 font-mono text-[13px] text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary">person_search</span>
              Analyzing sender wallet:
              <a
                href={`https://etherscan.io/address/${result.address}`}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                {result.address}
              </a>
            </div>
          )}

          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface border border-outline-variant p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div
                className={`absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20 ${
                  result.analysis.botProbability > 0.7
                    ? "bg-secondary"
                    : result.analysis.botProbability > 0.3
                    ? "bg-primary"
                    : "bg-tertiary"
                }`}
              ></div>
              <span className="font-mono text-[12px] text-outline mb-2">
                BOT PROBABILITY
              </span>
              <span
                className={`text-[48px] font-bold leading-none ${
                  result.analysis.botProbability > 0.7
                    ? "text-secondary"
                    : result.analysis.botProbability > 0.3
                    ? "text-primary"
                    : "text-tertiary"
                }`}
              >
                {(result.analysis.botProbability * 100).toFixed(0)}%
              </span>
            </div>

            <div className="bg-surface border border-outline-variant p-6 flex flex-col justify-center">
              <span className="font-mono text-[12px] text-outline mb-1">
                TOTAL TRANSACTIONS
              </span>
              <span className="text-[24px] font-bold text-on-surface">
                {result.analysis.totalTransactions}
              </span>
              <div className="w-full h-[1px] bg-outline-variant my-3"></div>
              <span className="font-mono text-[12px] text-outline mb-1">
                UNIQUE INTERACTED ADDRESSES
              </span>
              <span className="text-[24px] font-bold text-on-surface">
                {result.analysis.uniqueAddressesInteracted}
              </span>
            </div>

            <div className="bg-surface border border-outline-variant p-6 flex flex-col justify-center">
              <span className="font-mono text-[12px] text-outline mb-1">
                FIRST SEEN
              </span>
              <span className="text-[16px] font-bold text-on-surface mb-3 truncate">
                {result.analysis.firstSeen}
              </span>
              <span className="font-mono text-[12px] text-outline mb-1">
                LAST SEEN
              </span>
              <span className="text-[16px] font-bold text-on-surface truncate">
                {result.analysis.lastSeen}
              </span>
            </div>
          </div>

          {/* Indicators */}
          <div className="bg-surface border border-outline-variant p-6">
            <h3 className="font-mono text-[16px] text-on-surface mb-4 flex items-center gap-2 border-b border-outline-variant pb-2">
              <span className="material-symbols-outlined text-primary text-[20px]">
                policy
              </span>
              BEHAVIORAL INDICATORS
            </h3>
            <ul className="space-y-3">
              {result.analysis.indicators.map((indicator, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-sans text-[14px] text-on-surface-variant"
                >
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                    warning
                  </span>
                  {indicator}
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Transactions */}
          <div className="bg-surface border border-outline-variant p-0 overflow-hidden">
            <div className="p-4 border-b border-outline-variant bg-surface-high">
              <h3 className="font-mono text-[16px] text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  list_alt
                </span>
                RECENT TRANSACTIONS SAMPLE
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full font-mono text-[12px] text-left">
                <thead className="bg-surface-high border-b border-outline-variant text-primary">
                  <tr>
                    <th className="px-4 py-3 font-normal">TX HASH</th>
                    <th className="px-4 py-3 font-normal">FROM</th>
                    <th className="px-4 py-3 font-normal">TO</th>
                    <th className="px-4 py-3 font-normal">VALUE (ETH)</th>
                    <th className="px-4 py-3 font-normal">GAS (GWEI)</th>
                  </tr>
                </thead>
                <tbody>
                  {result.analysis.transactionsSample.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-outline">
                        No transactions found.
                      </td>
                    </tr>
                  ) : (
                    result.analysis.transactionsSample.map((tx) => (
                      <tr
                        key={tx.hash}
                        className="border-b border-outline-variant/50 hover:bg-surface-high transition-colors text-on-surface-variant"
                      >
                        <td className="px-4 py-3 truncate max-w-[120px]">
                          <a
                            href={`https://etherscan.io/tx/${tx.hash}`}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary underline decoration-primary/30"
                          >
                            {tx.hash}
                          </a>
                        </td>
                        <td className="px-4 py-3 truncate max-w-[120px]">
                          {tx.from}
                        </td>
                        <td className="px-4 py-3 truncate max-w-[120px]">{tx.to}</td>
                        <td className="px-4 py-3">{tx.valueEth}</td>
                        <td className="px-4 py-3">{tx.gasPriceGwei}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
