//! Defines different visitor patterns and sort-orders for any tree.
//! See more on tree-traversal https://en.wikipedia.org/wiki/Tree_traversal

use polars_arrow::error::PolarsResult;
mod expr;
mod visitors;

pub(crate) use expr::*;
pub(crate) use visitors::*;

/// Controls how the [`TreeWalker`] recursion should proceed for [`TreeWalker::visit`].
#[derive(Debug)]
pub enum VisitRecursion {
    /// Continue the visit to this node tree.
    Continue,
    /// Keep recursive but skip applying op on the children
    Skip,
    /// Stop the visit to this node tree.
    Stop,
}

/// Controls how the [`TreeWalker`] recursion should proceed for [`TreeWalker::rewrite`].
#[derive(Debug)]
pub enum RewriteRecursion {
    /// Continue the visit to this node and children.
    Continue,
    /// Don't mutate this node, continue visiting the children
    Skip,
    /// Stop and return.
    /// This doesn't visit the children
    Stop,
    /// Call `op` immediately and return
    /// This doesn't visit the children
    MutateAndStop,
}
