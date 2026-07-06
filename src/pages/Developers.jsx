import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Code, FileText, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import {
  CHAINS as CHAIN_DATA,
  getContractAddress,
  SWAP_EXECUTOR_ADDRESSES,
} from '../constants/contractDeployments';
import routerDocsContent from '../content/router-docs.md?raw';
import swapExecutorDocsContent from '../content/swap-executor-docs.md?raw';
import poolFactoryDocsContent from '../content/pool-factory-docs.md?raw';
import clFactoryDocsContent from '../content/cl-factory-docs.md?raw';
import nfpmDocsContent from '../content/nfpm-docs.md?raw';
import v3SwapRouterDocsContent from '../content/v3-router-docs.md?raw';

const CHAINS = Object.values(CHAIN_DATA);

const DOC_CATEGORIES = [
  { name: 'aggregators/', items: ['swapExecutor'] },
  { name: 'core_v2/', items: ['router', 'poolFactory'] },
  {
    name: 'starquake_v3/',
    items: ['v3SwapRouter', 'clFactory', 'nonfungiblePositionManager'],
  },
  {
    name: 'in_development/',
    items: ['bridging', 'crossSwap', 'payments', 'lending'],
  },
];

const DOCS_CONFIG = {
  swapExecutor: {
    title: 'Router On Steroids (SwapExecutor)',
    breadcrumb: 'SwapExecutor.sol',
    filename: 'SwapExecutor.sol',
    description:
      'Aggregates liquidity from multiple sources to provide the best possible swap rates for your trades.',
    content: swapExecutorDocsContent,
    github:
      'https://github.com/magnetar-finance/steroid-routers/blob/main/contracts/SwapExecutor.sol',
    deployments:
      'https://github.com/magnetar-finance/steroid-routers/tree/main/scripts/deployments',
    getAddress: (chainId) => SWAP_EXECUTOR_ADDRESSES[chainId],
    isRecommended: true,
  },
  router: {
    title: 'Standard Router',
    breadcrumb: 'Router.sol',
    filename: 'Router.sol',
    description:
      'Core AMM router for token swaps and liquidity management operations.',
    content: routerDocsContent,
    github:
      'https://github.com/magnetar-finance/contracts/blob/main/contracts/Router.sol',
    deployments:
      'https://github.com/magnetar-finance/contracts/tree/main/script/constants/output',
    getAddress: (chainId) => getContractAddress(chainId, 'router'),
  },
  poolFactory: {
    title: 'V2 Pool Factory',
    breadcrumb: 'PoolFactory.sol',
    filename: 'PoolFactory.sol',
    description:
      'Core factory contract for deploying and registering new liquidity pools.',
    content: poolFactoryDocsContent,
    github:
      'https://github.com/magnetar-finance/contracts/blob/main/contracts/factories/PoolFactory.sol',
    deployments:
      'https://github.com/magnetar-finance/contracts/tree/main/script/constants/output',
    getAddress: (chainId) => getContractAddress(chainId, 'poolFactory'),
  },
  clFactory: {
    title: 'V3 CL Factory',
    breadcrumb: 'CLFactory.sol',
    filename: 'CLFactory.sol',
    description:
      'Core factory contract for deploying V3 concentrated liquidity pools.',
    content: clFactoryDocsContent,
    github:
      'https://github.com/magnetar-finance/starquake/blob/main/contracts/core/CLFactory.sol',
    deployments:
      'https://github.com/magnetar-finance/starquake/tree/main/script/constants/output',
    getAddress: (chainId) => getContractAddress(chainId, 'clFactory'),
  },
  nonfungiblePositionManager: {
    title: 'Nonfungible Position Manager',
    breadcrumb: 'NonfungiblePositionManager.sol',
    filename: 'NFPM.sol',
    description:
      'ERC721 NFT interface for managing V3 concentrated liquidity positions.',
    content: nfpmDocsContent,
    github:
      'https://github.com/magnetar-finance/starquake/blob/main/contracts/periphery/NonfungiblePositionManager.sol',
    deployments:
      'https://github.com/magnetar-finance/starquake/tree/main/script/constants/output',
    getAddress: (chainId) =>
      getContractAddress(chainId, 'nonfungiblePositionManager'),
  },
  v3SwapRouter: {
    title: 'V3 Swap Router',
    breadcrumb: 'SwapRouter.sol',
    filename: 'SwapRouter.sol',
    description:
      'Handles the execution of fast, stateless token swaps across V3 concentrated liquidity pools.',
    content: v3SwapRouterDocsContent,
    github:
      'https://github.com/magnetar-finance/starquake/blob/main/contracts/periphery/SwapRouter.sol',
    deployments:
      'https://github.com/magnetar-finance/starquake/tree/main/script/constants/output',
    getAddress: (chainId) => getContractAddress(chainId, 'v3SwapRouter'),
  },
  bridging: {
    title: 'Bridging',
    breadcrumb: 'bridge.sol',
    filename: 'bridge.sol',
    description: 'Secure cross-chain token transfer infrastructure.',
    isComingSoon: true,
  },
  crossSwap: {
    title: 'Cross-Swap',
    breadcrumb: 'CrossSwap.sol',
    filename: 'CrossSwap.sol',
    description:
      'Execute token swaps across different blockchain networks in a single transaction.',
    isComingSoon: true,
  },
  payments: {
    title: 'Intra & Cross-Chain Payments',
    breadcrumb: 'Payments.sol',
    filename: 'Payments.sol',
    description:
      'Scalable payment infrastructure for on-chain commerce and streaming.',
    isComingSoon: true,
  },
  lending: {
    title: 'Lending',
    breadcrumb: 'Lending.sol',
    filename: 'Lending.sol',
    description:
      'Decentralized money markets for borrowing and lending crypto assets.',
    isComingSoon: true,
  },
};

// Custom terminal-themed syntax highlighter style
const terminalStyle = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: '#0d0b14',
    margin: 0,
    padding: '1rem',
    borderRadius: 0,
  },
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    background: 'none',
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    fontSize: '0.8rem',
  },
};

export default function Developers() {
  const [copiedAddress, setCopiedAddress] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState('swapExecutor');
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(label);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const currentDoc = DOCS_CONFIG[selectedDoc];

  return (
    <div className="min-h-screen pt-14 flex" style={{ background: '#08060b' }}>
      {/* ── Sidebar: File Tree ── */}
      <aside
        className="w-60 fixed left-0 top-14 bottom-0 overflow-y-auto z-10 border-r border-[rgba(255,255,255,0.06)]"
        style={{
          background: 'rgba(13,11,20,0.95)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="p-4 border-b border-[rgba(255,255,255,0.06)]">
          <p className="text-[10px] text-[#b8add2] tracking-widest uppercase font-bold">
            ~/docs/magnetar
          </p>
        </div>
        <div className="p-3">
          <nav className="space-y-5">
            {DOC_CATEGORIES.map((category, catIdx) => (
              <div key={category.name}>
                <p className="text-[10px] font-bold text-[#1fc7d4] tracking-widest mb-2 px-1">
                  {catIdx === DOC_CATEGORIES.length - 1 ? '└─' : '├─'}{' '}
                  {category.name}
                </p>
                <div className="space-y-0.5">
                  {category.items.map((key, itemIdx) => {
                    const config = DOCS_CONFIG[key];
                    const isLast = itemIdx === category.items.length - 1;
                    const isActive = selectedDoc === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedDoc(key)}
                        className={`w-full text-left text-[11px] py-1.5 pl-5 pr-2 transition-all duration-150 flex items-center justify-between gap-2 ${
                          isActive
                            ? 'text-[#1fc7d4] bg-[rgba(31,199,212,0.08)]'
                            : config.isComingSoon
                            ? 'text-[#444155] hover:text-[#666171]'
                            : 'text-[#b8add2] hover:text-[#ffffff] hover:bg-[rgba(255,255,255,0.04)]'
                        }`}
                        style={{ borderRadius: '8px' }}
                      >
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="text-[#444155] shrink-0">
                            {isLast ? '└─' : '├─'}
                          </span>
                          {isActive && (
                            <span className="text-[#ed4b9e]">▶</span>
                          )}
                          <span className="truncate tracking-wide">
                            {config.filename || config.breadcrumb}
                          </span>
                        </span>
                        {config.isComingSoon && (
                          <span className="text-[9px] text-[#ed4b9e] shrink-0 tracking-wider font-bold">
                            [WIP]
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className="flex-1 ml-60 relative min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDoc}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="max-w-4xl mx-auto px-8 py-10"
          >
            {/* Breadcrumb path */}
            <div className="flex items-center gap-1.5 text-[10px] text-[#b8add2] mb-8 tracking-widest font-bold">
              <span>~/docs/magnetar</span>
              <span>/</span>
              <span className="text-[#1fc7d4]">{currentDoc.breadcrumb}</span>
            </div>

            {/* File header bar */}
            <div
              className="flex items-center gap-2 px-6 py-3 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(13,11,20,0.6)] backdrop-blur-md"
              style={{
                borderRadius: '24px 24px 0 0',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                borderLeft: '1px solid rgba(255,255,255,0.06)',
                borderRight: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#444155]" />
                <span className="w-3 h-3 rounded-full bg-[#444155]" />
                <span className="w-3 h-3 rounded-full bg-[#ed4b9e]" />
              </div>
              <span className="text-[10px] text-[#b8add2] ml-2 tracking-widest flex-1 text-center font-bold">
                {currentDoc.breadcrumb}
              </span>
              {currentDoc.isRecommended && (
                <span
                  className="text-[9px] font-bold text-[#ed4b9e] bg-[rgba(237,75,158,0.1)] border border-[rgba(237,75,158,0.3)] px-3 py-1 tracking-widest"
                  style={{ borderRadius: '9999px' }}
                >
                  RECOMMENDED
                </span>
              )}
            </div>

            {/* Content area */}
            <div
              className="border border-[rgba(255,255,255,0.06)] border-t-0 p-8"
              style={{
                borderRadius: '0 0 24px 24px',
                background: 'rgba(39,38,44,0.25)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Title + description */}
              <h1 className="text-3xl font-bold text-[#ffffff] mb-3 tracking-tight">
                {currentDoc.title}
              </h1>
              <p className="text-sm text-[#b8add2] mb-8 leading-relaxed">
                # {currentDoc.description}
              </p>

              {currentDoc.isComingSoon ? (
                /* ── Coming Soon ── */
                <div
                  className="py-16 text-center border border-[rgba(255,255,255,0.06)] bg-[rgba(31,199,212,0.04)]"
                  style={{ borderRadius: '24px' }}
                >
                  <div className="inline-flex flex-col items-center gap-4">
                    <div
                      className="w-16 h-16 border border-[rgba(31,199,212,0.4)] flex items-center justify-center shadow-[0_0_20px_rgba(31,199,212,0.15)]"
                      style={{
                        borderRadius: '9999px',
                        background: 'rgba(31,199,212,0.08)',
                      }}
                    >
                      <span className="text-2xl text-[#1fc7d4] cursor-blink">
                        ▋
                      </span>
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#ffffff] mb-2 tracking-tight">
                        [IN DEVELOPMENT]
                      </p>
                      <p className="text-[10px] text-[#ed4b9e] font-bold tracking-widest mb-4">
                        # module not yet deployed
                      </p>
                      <div className="text-[11px] text-[#b8add2] space-y-1 text-left inline-block">
                        <p>$ git status {currentDoc.filename}</p>
                        <p className="text-[#666171]">
                          &gt; branch: dev/upcoming
                        </p>
                        <p className="text-[#666171]">
                          &gt; status: work-in-progress
                        </p>
                        <p className="text-[#666171]">
                          &gt; docs: pending-publication
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* ── Markdown Content ── */}
                  <div className="space-y-0">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({ ...props }) => (
                          <h1
                            className="text-2xl font-bold text-[#ffffff] mb-4 mt-8 first:mt-0 tracking-tight"
                            {...props}
                          />
                        ),
                        h2: ({ ...props }) => (
                          <h2
                            className="text-xl font-bold text-[#ffffff] mb-4 mt-8 pb-3 border-b border-[rgba(255,255,255,0.06)] tracking-tight"
                            {...props}
                          />
                        ),
                        h3: ({ ...props }) => (
                          <h3
                            className="text-base font-bold text-[#1fc7d4] mb-3 mt-6 tracking-wide"
                            {...props}
                          />
                        ),
                        p: ({ ...props }) => (
                          <p
                            className="text-sm text-[#b8add2] mb-5 leading-relaxed"
                            {...props}
                          />
                        ),
                        ul: ({ ...props }) => (
                          <ul
                            className="pl-4 text-[#b8add2] mb-5 space-y-2 text-sm"
                            {...props}
                          />
                        ),
                        ol: ({ ...props }) => (
                          <ol
                            className="pl-4 text-[#b8add2] mb-5 space-y-2 text-sm"
                            {...props}
                          />
                        ),
                        li: ({ ...props }) => (
                          <li
                            className="flex gap-2 before:content-['>'] before:text-[#ed4b9e] before:shrink-0 before:font-bold text-sm text-[#b8add2]"
                            {...props}
                          />
                        ),
                        strong: ({ ...props }) => (
                          <strong
                            className="text-[#1fc7d4] font-bold"
                            {...props}
                          />
                        ),
                        blockquote: ({ ...props }) => (
                          <blockquote
                            className="border-l-4 border-[#7645d9] pl-5 my-6 text-[#b8add2] italic bg-[rgba(118,69,217,0.1)] py-4 pr-5 rounded-r-xl"
                            {...props}
                          />
                        ),
                        code: ({ inline, className, children, ...props }) => {
                          const match = /language-(\w+)/.exec(className || '');
                          const codeString = String(children).replace(
                            /\n$/,
                            '',
                          );
                          const codeId = codeString.slice(0, 20);
                          return !inline && match ? (
                            <div
                              className="my-6 border border-[rgba(255,255,255,0.06)]"
                              style={{
                                borderRadius: '12px',
                                overflow: 'hidden',
                              }}
                            >
                              {/* Code block header */}
                              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d0b14] border-b border-[rgba(255,255,255,0.06)]">
                                <div className="flex items-center gap-3">
                                  <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#444155]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#444155]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ed4b9e]" />
                                  </div>
                                  <span className="text-[10px] text-[#b8add2] tracking-widest font-bold uppercase">
                                    {match[1]}
                                  </span>
                                </div>
                                <button
                                  onClick={() => copyCode(codeString, codeId)}
                                  className="flex items-center gap-1.5 text-[10px] text-[#b8add2] hover:text-[#1fc7d4] transition-colors tracking-wider font-bold"
                                >
                                  {copiedCode === codeId ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-[#1fc7d4]" />{' '}
                                      copied
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3.5 h-3.5" /> copy
                                    </>
                                  )}
                                </button>
                              </div>
                              <SyntaxHighlighter
                                language={match[1]}
                                style={terminalStyle}
                                customStyle={{
                                  margin: 0,
                                  background: '#08060b',
                                }}
                                codeTagProps={{
                                  style: {
                                    fontFamily: '"JetBrains Mono", monospace',
                                    fontSize: '0.85rem',
                                  },
                                }}
                              >
                                {codeString}
                              </SyntaxHighlighter>
                            </div>
                          ) : inline ? (
                            <code
                              className="px-2 py-0.5 bg-[rgba(31,199,212,0.1)] text-[#1fc7d4] text-[0.85em] font-mono rounded-md"
                              {...props}
                            >
                              {children}
                            </code>
                          ) : (
                            <code className="block" {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {currentDoc.content}
                    </ReactMarkdown>
                  </div>

                  {/* ── Contract Addresses ── */}
                  <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.06)] relative">
                    <div className="absolute top-0 left-0 w-1/4 h-px bg-[#1fc7d4] opacity-60" />
                    <p className="text-[10px] text-[#b8add2] tracking-widest mb-4 font-bold">
                      $ cat ./deployments/
                      {currentDoc.filename?.replace('.sol', '.json')}
                    </p>
                    <h2 className="text-sm font-bold text-[#ffffff] mb-6 tracking-tight">
                      [DEPLOYED ADDRESSES]
                    </h2>

                    <div className="space-y-4">
                      {CHAINS.map((chain) => {
                        const address = currentDoc.getAddress(chain.chainId);
                        if (!address) return null;
                        return (
                          <div
                            key={chain.id}
                            className="group border border-[rgba(255,255,255,0.06)] hover:border-[rgba(31,199,212,0.4)] transition-colors p-5 bg-[#08060b]"
                            style={{ borderRadius: '16px' }}
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span
                                className="w-2 h-2 rounded-full bg-[#1fc7d4] animate-pulse-glow"
                                style={{
                                  boxShadow: '0 0 10px rgba(31,199,212,0.6)',
                                }}
                              />
                              <span className="text-sm font-bold text-[#ffffff] tracking-wide">
                                {chain.name}
                              </span>
                              <span className="text-[10px] text-[#b8add2] tracking-wider font-bold">
                                chain_id:{chain.chainId}
                              </span>
                            </div>
                            <div
                              className="flex items-center gap-3 p-3.5 bg-[rgba(13,11,20,0.8)] border border-[rgba(255,255,255,0.06)] group-hover:border-[rgba(31,199,212,0.3)] transition-colors"
                              style={{ borderRadius: '8px' }}
                            >
                              <span className="text-[10px] text-[#b8add2] shrink-0 tracking-wider font-bold">
                                addr:
                              </span>
                              <code className="flex-1 text-sm text-[#7645d9] font-mono break-all tracking-wide selection:bg-[rgba(118,69,217,0.3)]">
                                {address}
                              </code>
                              <button
                                onClick={() =>
                                  copyToClipboard(
                                    address,
                                    `address-${chain.id}`,
                                  )
                                }
                                className="p-2 hover:bg-[rgba(31,199,212,0.1)] transition-colors"
                                style={{ borderRadius: '8px' }}
                                title="Copy"
                              >
                                {copiedAddress === `address-${chain.id}` ? (
                                  <Check className="w-4 h-4 text-[#1fc7d4]" />
                                ) : (
                                  <Copy className="w-4 h-4 text-[#b8add2] group-hover:text-[#1fc7d4] transition-colors" />
                                )}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Resources */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <a
                        href={currentDoc.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-4 text-[11px] text-[#b8add2] hover:text-[#ffffff] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(31,199,212,0.4)] bg-[#08060b] hover:bg-[rgba(31,199,212,0.04)] transition-all tracking-wider font-bold"
                        style={{ borderRadius: '12px' }}
                      >
                        <FileText className="w-4 h-4 text-[#1fc7d4]" />
                        $ cat source_code.sol
                        <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                      </a>
                      <a
                        href={currentDoc.deployments}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-4 text-[11px] text-[#b8add2] hover:text-[#ffffff] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(31,199,212,0.4)] bg-[#08060b] hover:bg-[rgba(31,199,212,0.04)] transition-all tracking-wider font-bold"
                        style={{ borderRadius: '12px' }}
                      >
                        <Code className="w-4 h-4 text-[#ed4b9e]" />
                        $ ls ./deployments/
                        <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
