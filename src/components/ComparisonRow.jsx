import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';
import './ComparisonRow.css';

const ComparisonRow = ({ article, index }) => {
    return (
        <motion.div
            className="row-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div className="article-header">
                <h2 className="article-title">{article.title}</h2>
            </div>

            <div className="comparison-grid">
                {/* Original Article Box */}
                <div className="article-card">
                    <div className="card-header">
                        <span className="card-label label-original">
                            <BookOpen size={16} style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }} />
                            Original Article
                        </span>
                        <h3 className="card-headline">{article.original.headline}</h3>
                    </div>
                    <div className="card-content">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.original.content}</ReactMarkdown>
                    </div>
                </div>

                {/* Rewritten Article Box */}
                <div className="article-card">
                    <div className="card-header">
                        <span className="card-label label-rewritten">
                            <Sparkles size={16} style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }} />
                            Rewritten & Structured
                        </span>
                        <h3 className="card-headline">{article.rewritten.headline}</h3>
                    </div>
                    <div className="card-content">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.rewritten.content}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ComparisonRow;
