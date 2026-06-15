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
    background: '#03030e',
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
    <div className="min-h-screen pt-14 flex bg-[#000000]">
      {/* ── Sidebar: File Tree ── */}
      <aside className="w-60 bg-[#000000] border-r border-[rgba(41,98,255,0.07)] fixed left-0 top-14 bottom-0 overflow-y-auto z-10">
        <div className="p-4 border-b border-[rgba(41,98,255,0.07)]">
          <p className="text-[10px] text-[#334155] tracking-widest uppercase">
            ~/docs/magnetar
          </p>
        </div>
        <div className="p-3">
          <nav className="space-y-5">
            {DOC_CATEGORIES.map((category, catIdx) => (
              <div key={category.name}>
                {/* Directory name */}
                <p className="text-[10px] font-bold text-[#4f46e5] tracking-widest mb-2 px-1">
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
                            ? 'text-[#2962ff] bg-[rgba(41,98,255,0.06)]'
                            : config.isComingSoon
                            ? 'text-[#1e293b] hover:text-[#334155]'
                            : 'text-[#475569] hover:text-[#ffffff] hover:bg-[rgba(41,98,255,0.03)]'
                        }`}
                        style={{ borderRadius: '2px' }}
                      >
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="text-[#1e293b] shrink-0">
                            {isLast ? '└─' : '├─'}
                          </span>
                          {isActive && (
                            <span className="text-[#2962ff]">▶</span>
                          )}
                          <span className="truncate tracking-wide">
                            {config.filename || config.breadcrumb}
                          </span>
                        </span>
                        {config.isComingSoon && (
                          <span className="text-[9px] text-[#1e293b] shrink-0 tracking-wider">
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
            <div className="flex items-center gap-1.5 text-[10px] text-[#334155] mb-8 tracking-widest">
              <span>~/docs/magnetar</span>
              <span>/</span>
              <span className="text-[#4f46e5]">{currentDoc.breadcrumb}</span>
            </div>

            {/* File header bar */}
            <div
              className="flex items-center gap-2 px-4 py-2 mb-0 border-b border-[rgba(41,98,255,0.1)] bg-[#03030e]"
              style={{
                borderRadius: '2px 2px 0 0',
                borderTop: '1px solid rgba(41,98,255,0.1)',
                borderLeft: '1px solid rgba(41,98,255,0.1)',
                borderRight: '1px solid rgba(41,98,255,0.1)',
              }}
            >
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1e293b]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#1e293b]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[rgba(41,98,255,0.3)]" />
              </div>
              <span className="text-[10px] text-[#334155] ml-2 tracking-widest flex-1 text-center">
                {currentDoc.breadcrumb}
              </span>
              {currentDoc.isRecommended && (
                <span
                  className="text-[9px] font-bold text-[#2962ff] bg-[rgba(41,98,255,0.08)] border border-[rgba(41,98,255,0.2)] px-2 py-0.5 tracking-widest"
                  style={{ borderRadius: '2px' }}
                >
                  RECOMMENDED
                </span>
              )}
            </div>

            {/* Content area */}
            <div
              className="border border-[rgba(41,98,255,0.07)] border-t-0 p-8"
              style={{ borderRadius: '0 0 2px 2px', background: '#05050f' }}
            >
              {/* Title + description */}
              <h1 className="text-2xl font-bold text-[#ffffff] mb-2 tracking-tight">
                {currentDoc.title}
              </h1>
              <p className="text-xs text-[#475569] mb-8 leading-relaxed">
                # {currentDoc.description}
              </p>

              {currentDoc.isComingSoon ? (
                /* ── Coming Soon ── */
                <div
                  className="py-16 text-center border border-[rgba(41,98,255,0.07)] bg-[rgba(41,98,255,0.01)]"
                  style={{ borderRadius: '2px' }}
                >
                  <div className="inline-flex flex-col items-center gap-4">
                    <div
                      className="w-12 h-12 border border-[rgba(41,98,255,0.2)] flex items-center justify-center"
                      style={{ borderRadius: '2px' }}
                    >
                      <span className="text-xl text-[#2962ff] cursor-blink">
                        ▋
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#ffffff] mb-2 tracking-tight">
                        [IN DEVELOPMENT]
                      </p>
                      <p className="text-[10px] text-[#334155] tracking-widest mb-4">
                        # module not yet deployed
                      </p>
                      <div className="text-[11px] text-[#334155] space-y-1 text-left inline-block">
                        <p>$ git status {currentDoc.filename}</p>
                        <p className="text-[#1e293b]">
                          &gt; branch: dev/upcoming
                        </p>
                        <p className="text-[#1e293b]">
                          &gt; status: work-in-progress
                        </p>
                        <p className="text-[#1e293b]">
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
                            className="text-xl font-bold text-[#ffffff] mb-4 mt-8 first:mt-0 tracking-tight"
                            {...props}
                          />
                        ),
                        h2: ({ ...props }) => (
                          <h2
                            className="text-base font-bold text-[#ffffff] mb-3 mt-8 pb-2 border-b border-[rgba(41,98,255,0.07)] tracking-tight"
                            {...props}
                          />
                        ),
                        h3: ({ ...props }) => (
                          <h3
                            className="text-sm font-bold text-[#94a3b8] mb-2 mt-6 tracking-wide"
                            {...props}
                          />
                        ),
                        p: ({ ...props }) => (
                          <p
                            className="text-xs text-[#475569] mb-4 leading-relaxed"
                            {...props}
                          />
                        ),
                        ul: ({ ...props }) => (
                          <ul
                            className="pl-4 text-[#475569] mb-4 space-y-1.5"
                            {...props}
                          />
                        ),
                        ol: ({ ...props }) => (
                          <ol
                            className="pl-4 text-[#475569] mb-4 space-y-1.5"
                            {...props}
                          />
                        ),
                        li: ({ ...props }) => (
                          <li
                            className="text-xs text-[#475569] flex gap-2 before:content-['>'] before:text-[#334155] before:shrink-0"
                            {...props}
                          />
                        ),
                        strong: ({ ...props }) => (
                          <strong
                            className="text-[#2962ff] font-bold"
                            {...props}
                          />
                        ),
                        blockquote: ({ ...props }) => (
                          <blockquote
                            className="border-l-2 border-[rgba(41,98,255,0.3)] pl-4 my-4 text-[#475569] italic bg-[rgba(41,98,255,0.02)] py-3 pr-4"
                            style={{ borderRadius: '0 2px 2px 0' }}
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
                              className="my-5 border border-[rgba(41,98,255,0.1)]"
                              style={{ borderRadius: '2px' }}
                            >
                              {/* Code block header */}
                              <div className="flex items-center justify-between px-4 py-2 bg-[#03030e] border-b border-[rgba(41,98,255,0.08)]">
                                <div className="flex items-center gap-3">
                                  <div className="flex gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#1e293b]" />
                                    <span className="w-2 h-2 rounded-full bg-[#1e293b]" />
                                    <span className="w-2 h-2 rounded-full bg-[rgba(41,98,255,0.25)]" />
                                  </div>
                                  <span className="text-[10px] text-[#334155] tracking-widest">
                                    {match[1]}
                                  </span>
                                </div>
                                <button
                                  onClick={() => copyCode(codeString, codeId)}
                                  className="flex items-center gap-1.5 text-[10px] text-[#334155] hover:text-[#2962ff] transition-colors tracking-wider"
                                >
                                  {copiedCode === codeId ? (
                                    <>
                                      <Check className="w-3 h-3 text-[#2962ff]" />{' '}
                                      copied
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" /> copy
                                    </>
                                  )}
                                </button>
                              </div>
                              <SyntaxHighlighter
                                language={match[1]}
                                style={terminalStyle}
                                customStyle={{
                                  margin: 0,
                                  borderRadius: '0 0 2px 2px',
                                  background: '#03030e',
                                }}
                                codeTagProps={{
                                  style: {
                                    fontFamily: '"JetBrains Mono", monospace',
                                    fontSize: '0.78rem',
                                  },
                                }}
                              >
                                {codeString}
                              </SyntaxHighlighter>
                            </div>
                          ) : inline ? (
                            <code
                              className="px-1.5 py-0.5 bg-[rgba(41,98,255,0.05)] text-[#2962ff] text-[0.8em] font-mono border border-[rgba(41,98,255,0.1)]"
                              style={{ borderRadius: '2px' }}
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
                  <div className="mt-12 pt-8 border-t border-[rgba(41,98,255,0.07)] relative">
                    <div className="absolute top-0 left-0 w-1/4 h-px bg-[#2962ff] opacity-40" />
                    <p className="text-[10px] text-[#334155] tracking-widest mb-4">
                      $ cat ./deployments/
                      {currentDoc.filename?.replace('.sol', '.json')}
                    </p>
                    <h2 className="text-sm font-bold text-[#ffffff] mb-6 tracking-tight">
                      [DEPLOYED ADDRESSES]
                    </h2>

                    <div className="space-y-3">
                      {CHAINS.map((chain) => {
                        const address = currentDoc.getAddress(chain.chainId);
                        if (!address) return null;
                        return (
                          <div
                            key={chain.id}
                            className="group border border-[rgba(41,98,255,0.07)] hover:border-[rgba(41,98,255,0.18)] transition-colors p-4 bg-[#03030e]"
                            style={{ borderRadius: '2px' }}
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2962ff] animate-pulse-glow" />
                              <span className="text-xs font-bold text-[#94a3b8] tracking-wide">
                                {chain.name}
                              </span>
                              <span className="text-[10px] text-[#334155] tracking-wider">
                                chain_id:{chain.chainId}
                              </span>
                            </div>
                            <div
                              className="flex items-center gap-2 p-3 bg-[#000000] border border-[rgba(41,98,255,0.05)] group-hover:border-[rgba(41,98,255,0.12)] transition-colors"
                              style={{ borderRadius: '2px' }}
                            >
                              <span className="text-[10px] text-[#334155] shrink-0 tracking-wider">
                                addr:
                              </span>
                              <code className="flex-1 text-xs text-[#4f46e5] font-mono break-all tracking-wide selection:bg-[rgba(41,98,255,0.2)]">
                                {address}
                              </code>
                              <button
                                onClick={() =>
                                  copyToClipboard(
                                    address,
                                    `address-${chain.id}`,
                                  )
                                }
                                className="p-1.5 hover:bg-[rgba(41,98,255,0.06)] transition-colors"
                                style={{ borderRadius: '2px' }}
                                title="Copy"
                              >
                                {copiedAddress === `address-${chain.id}` ? (
                                  <Check className="w-3.5 h-3.5 text-[#2962ff]" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5 text-[#334155] group-hover:text-[#475569] transition-colors" />
                                )}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Resources */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <a
                        href={currentDoc.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-[11px] text-[#475569] hover:text-[#2962ff] border border-[rgba(41,98,255,0.07)] hover:border-[rgba(41,98,255,0.2)] bg-[#03030e] transition-all tracking-wider"
                        style={{ borderRadius: '2px' }}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        $ cat source_code.sol
                        <ExternalLink className="w-3 h-3 opacity-40" />
                      </a>
                      <a
                        href={currentDoc.deployments}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-[11px] text-[#475569] hover:text-[#2962ff] border border-[rgba(41,98,255,0.07)] hover:border-[rgba(41,98,255,0.2)] bg-[#03030e] transition-all tracking-wider"
                        style={{ borderRadius: '2px' }}
                      >
                        <Code className="w-3.5 h-3.5" />
                        $ ls ./deployments/
                        <ExternalLink className="w-3 h-3 opacity-40" />
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
