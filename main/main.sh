#!/usr/bin/env bash
# vim: set noexpandtab tabstop=2:

source trapdebug
source "$(conda info --base)/etc/profile.d/conda.sh"
conda init && conda activate cellxgene_merfish_mouse
# cellxgene launch -o --host 0.0.0.0 /tmp/Chen_MERFISH_wt2_5_cellxgene.h5ad
cellxgene.sh -e umap -e MERFISH /tmp/Chen_MERFISH_wt2_5_cellxgene.h5ad
